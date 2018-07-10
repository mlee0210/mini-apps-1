
//Import express
var express = require('express');

//create app level object of Express JS
var app = express();

app.post('/', (req, res) => {
  res.send('POST REQUEST HANDLED');
});


//listen to the desired port 
app.listen(3000, () => {console.log('Server is running on 3000')});