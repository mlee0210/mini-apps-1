//import express
const express = require('express');

const path = require('path');

const User = require('./db/User');

//create app level object of Express
const app = express();

//serve static files
app.use(express.static('public'));

//parse the body on post req
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //Content-Type:application/json

//create middleWare that will log method received 
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});


app.get('/', (req, res) => {
  res.send('CHECKOUT');
});

//create function to handle post request
app.post('/', (req, res) => {

  if (Object.keys(req.body).includes('name')) {
    const {name, email, password} = req.body; 
    console.log('In the first form @ server/index.js');
    User.addFirstForm(name, email ,password, (err, result) => {
    	if(err) {
    	  console.log('err ', err);
    	} else {
    	  console.log('created account');
    	  res.status(201).send('posted');
    	}
    }); 
  } else if (Object.keys(req.body).includes('address_1')) {
  	if(req.body.address_2 === 'undefined') {
  	  const {address_1, city, state, zipcode, phone} = req.body;
  	  console.log('In the second form @ server/index.js');
  	  User.addSecondForm(address_1, city, state, zipcode, phone, (err, result) => {
        if(err) {
      	  console.log('err ', err);
      	} else {
      	  console.log('Added Ship Info');
      	  res.status(201).send('posted');
      	}
  	  });
  		
  	} else {
      const {address_1, address_2, city, state, zipcode, phone} = req.body;
  	  console.log('In the second form @ server/index.js');
  	  User.addSecondForm(address_1, address_2, city, state, zipcode, phone, (err, result) => {
        if(err) {
      	  console.log('err ', err);
      	} else {
      	  console.log('Added Ship Info');
      	  res.status(201).send('posted');
      	}
  	  });
  	}
  } else if (Object.keys(req.body).includes('credit')) {
  	const {credit, expiry, cvv, billingZip} = req.body;
  	console.log('In the third form @ server/index.js');
  	User.addThirdForm(credit, expiry, cvv, billingZip, (err, result) => {
      if(err) {
    	  console.log('err ', err);
    	} else {
    	  console.log('Added Pay Info');
    	  res.status(201).send('posted');  
    	}
  	});
  } else {
    res.status(404).send('NOT FOUND');
  }
});

app.listen(3000, () => { console.log('Listening on 3000...'); });