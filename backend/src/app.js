const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const {errors} = require('celebrate')

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
    this.server.use(errors())
  }
}

module.exports = new server().server