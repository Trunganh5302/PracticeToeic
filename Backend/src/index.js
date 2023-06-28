const express = require('express')
const app = express();

// index page
app.get('/', function(req, res) {
  res.send('pages/index');
});

app.listen(8080);
console.log('Server is listening on port 8080');