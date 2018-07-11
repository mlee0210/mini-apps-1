let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'users_list'

});

connection.connect((err) => {
  if(err) {
    console.log('Could not connect to the database..', err); 
  } else {
  	console.log('Connected to database  @ db/index.js');
  }
});

module.exports = connection;