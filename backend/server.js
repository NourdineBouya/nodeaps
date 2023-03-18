const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const port = process.env.PORT

const connectDb = require('./config/db')

connectDb()

const app = express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/products' , require('./routes/ProductsRoutes'))
app.use('/api/users' , require('./routes/userRoutes'))

app.listen(port , ()=> console.log(port))