const routes = require('express').Router()

const ongsController = require('./Controllers/OngsController')
const incidentsController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')
routes.post('/ongs', ongsController.store)
routes.get('/ongs', ongsController.show)

routes.post('/incidents', incidentsController.store)
routes.get('/incidents', incidentsController.show)
routes.get('/profile', ProfileController.index)
routes.delete('/incidents/:id', incidentsController.delete)

routes.post('/sessions', SessionController.create)
module.exports = routes
