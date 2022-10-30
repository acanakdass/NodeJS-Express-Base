const express = require('express')
const configure = require('./configure')
const loaders = require('./loaders/index')
const app = express()
configure(app)
app.listen(process.env.APP_PORT,()=>{
    console.log(`Listening app on port ${process.env.APP_PORT}`)
})