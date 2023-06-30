const cors = require('cors');
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const connectDB = require('./config/connect')
const db = require('./models/index')


app.use(cors())
// HTTP logger  
app.use(morgan('combined'))
// template engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDB()

app.get('/' , async (req, res) => {
  try {
    let data = await db.User.findAll()
    console.log(data)
      res.send("Trung Anh")
  } catch (error) {
      console.log(error)
  }
})

app.listen(8080);
console.log('Server is listening on port 8080');