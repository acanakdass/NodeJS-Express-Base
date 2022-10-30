const dotenv = require('dotenv')
const express = require('express')
const middlewares = require('./middlewares')
const helmet = require('helmet')
const loaders = require('./loaders')
const Configure = (app) => {
    dotenv.config()
    loaders()
    app.use(helmet())
    app.use(express.json())
    
    middlewares.RoutingMiddleware(app)
    app.use(middlewares.GlobalExHandlerMiddleware)
}
module.exports = Configure