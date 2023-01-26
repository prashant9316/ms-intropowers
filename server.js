require('dotenv').config()

// Imports
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')



// Application build
const app = express()

// Setting CORS
const corsOpts = {
    origin: '*',
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],
    credentials: true
}


//Middlewares
app.use(cors(corsOpts))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"))


const indexRouter = require('./routes')


app.use('/', indexRouter)


app.listen(5000, () => {
    console.log("Open server on: http://localhost:5000")
})