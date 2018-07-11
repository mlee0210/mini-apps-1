DROP DATABASE IF EXISTS user;

CREATE DATABASE user;

USE user;

CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(20) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(10) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE userShip(
user_id INT,
address_1 VARCHAR(100) NOT NULL,
address_2 VARCHAR(100) NULL,
city VARCHAR(30) NOT NULL,
state VARCHAR(2) NOT NULL,
zipcode VARCHAR(5) NOT NULL,
phone VARCHAR(12) NOT NULL,
FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE userPay(
user_id INT,
credit VARCHAR(16) NOT NULL,
expiry VARCHAR(5) NOT NULL,
CVV VARCHAR(4) NOT NULL, 
billingZip VARCHAR(5) NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id)
);


INSERT INTO users(name, email, password) VALUES ('Michael', 'mike@gmail.com', 'pw');
INSERT INTO userShip(user_id, address_1, city, state, zipcode, phone) VALUES (LAST_INSERT_ID(), '1759 Ellis Street', 'San Francisco', 'CA', '94115', '628-250-0933');
INSERT INTO userPay(user_id, credit, expiry, CVV, billingZip) VALUES (LAST_INSERT_ID(),'1234567890123456', '07/22', '000', '94115');


INSERT INTO users(name, email, password) VALUES ('Erin', 'erin@gmail.com', 'pw');
INSERT INTO userShip(user_id, address_1, city, state, zipcode, phone) VALUES (LAST_INSERT_ID(), '944 Market Street', 'San Francisco', 'CA', '94115', '000-000-0000');
INSERT INTO userPay(user_id, credit, expiry, CVV, billingZip) VALUES (LAST_INSERT_ID(),'0000000000000000', '07/22', '000', '94115');
