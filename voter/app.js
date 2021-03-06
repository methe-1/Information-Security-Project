const bodyPaser = require('body-parser')
const express = require('express')
const path = require('path')
const multer = require('multer')
const connect = require('./db/connection')
const router = require('./routes')


const app = express()


// to make the frontend and backend have the same origin (domin, server, etc)
//  This will allow all requests from all origins to access your API
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

 connect()



app.use('/',express.static(path.join(__dirname, 'public/')))
.use(multer().none())
.use('/vote', router)



module.exports = app
