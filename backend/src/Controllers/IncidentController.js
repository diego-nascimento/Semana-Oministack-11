const Connection = require('../database/index')


module.exports = {
  async store(req, res){
    const {title, description, value} = req.body
    const ong_id = req.headers.authorization
    
    const [id] = await Connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })
    return res.json({id})
  },

  async show(req, res){
    const {page = 1} = req.query
    const [count] = await Connection('incidents')
    .count()
    
    const incidents = await Connection('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page-1) *5)
    .select([
      'incidents.*', 
      'ongs.name', 
      'ongs.email', 
      'ongs.whatsapp', 
      'ongs.uf',
      'ongs.city'
    ])
    res.header('X-Total-Count', count['count(*)'])

    return res.json(incidents)
  },

  async delete(req, res){
    const {id} = req.params
    const ong_id = req.headers.authorization

    const incidents = await Connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    if(!incidents){
      return res.status(400).json({error: 'Incident was not founded'})
    }
      if(incidents.ong_id !== ong_id){
        return res.status(401).json({error: 'Operation not permitted'})
      }

      await Connection('incidents').where('id', id).delete()
      return res.status(204).send()
  }
}