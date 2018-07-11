const db = require('./index.js');


//create function that adds information to tables

const addFirstForm = function(name, email, pw, callback) {
  db.query('INSERT INTO users(name, email, password) VALUES (?, ?, ?)', [name, email, pw], (err, result) => {
  	if(err) {
  	  console.log('ERROR adding to first form ', err);
  	  callback(err);
  	} else {
  	  console.log('POSTED to first form');
  	  callback(null, result);
  	}
  });
};

const addSecondForm = function(address1, city, state, zipcode, phone, callback) {
  let queryString = 'INSERT INTO userShip(user_id, address_1, city, state, zipcode, phone) VALUES (LAST_INSERT_ID(), ?, ?, ?, ?, ?)';
  db.query(queryString, [address1, city, state, zipcode, phone], (err, result) => {
    if(err) {
  	  console.log('ERROR adding to second form ', err);
  	  callback(err);
  	} else {
  	  console.log('POSTED to second form ');
  	  callback(null, result);
  	}	
  });

};


const addThirdForm = function(credit, expiry, cvv, billingZip, callback) {
  let queryString = 'INSERT INTO userPay(user_id, credit, expiry, CVV, billingZip) VALUES (LAST_INSERT_ID(), ?, ?, ?, ?)';
  db.query(queryString, [credit, expiry, cvv, billingZip], (err, result) => {
    if(err) {
  	  console.log('ERROR adding to third form ', err);
  	  callback(err);
  	} else {
  	  console.log('POSTED to third form ');
  	  callback(null, result);
  	}	
  });

};

addFirstForm('Michael', 'tester@gmail.com', 'test', (err, data) => console.log(err ? err : 'POSTED USER INFO'));
addSecondForm('1759 Ellis Street', 'San Francisco', 'CA', '94115', '628-250-0933', (err, data) => console.log(err ? err : 'POSTED USER SHIP INFO'));
addThirdForm('1234567890123456', '07/22', '000', '94115', (err, data) => console.log(err ? err : 'POSTED USER PAY INFO'));