const cors = require('cors');
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const connectDB = require('./config/connect')
const db = require('./models/index')
const initWebRoutes = require('./Route/web')


app.use(cors())
// HTTP logger  
app.use(morgan('combined'))
// template engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDB()

initWebRoutes(app)

app.listen(8080);
console.log('Server is listening on port 8080');