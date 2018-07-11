
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

//use parser to convert any incoming messages to JSON
app.use(parser.json());

//Point express to client folder, 
app.use(express.static('client'));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
})


var flatMessage = (object) => {
  let flatMsg = '';

  for(let key in object) {
  	if(key !== 'children') {
  		flatMsg += object[key] + ' ';
  	} else if (key === 'children') {
      for(let i = 0; i < object.children.length; i++) {
      	let childMsg = flatMessage(object.children[i]);
        flatMsg += childMsg;
      }
    }
  }
  return flatMsg;
}

app.post('/', (req, res) => {

  let arr = flatMessage(req.body).split(' ');
  res.status(201).send(arr);

});


//listen to the desired port 
app.listen(3000, () => {console.log('Server is running on 3000')});


























