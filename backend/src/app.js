const express = require('express')
const routes = require('./routes')
const cors = require('cors')
class server {
  constructor(){
    this.server = express()
    this.midwares()
    this.routes()
  }

  midwares(){
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes(){
    this.server.use(routes)
  }
}

module.exports = new server().server