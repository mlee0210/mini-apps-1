
//Import express
const express = require('express');

//Import path
const path = require('path');

//Import file system
const fs = require('fs');

//Import body-parser
const parser = require('body-parser');

//create app level object of Express JS
const app = express();

app.use(parser.json());

//Point express to client folder, 
app.use(express.static(__dirname + '/client'));


app.post('/', (req, res) => {
  
  res.send('POST REQUEST HANDLED');
});


//listen to the desired port 
app.listen(3000, () => {console.log('Server is running on 3000')});