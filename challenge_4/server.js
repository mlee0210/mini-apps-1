const express = require('express');

const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json());

app.use(express.static('client/dist'));


app.use((req,res,next) => {
  console.log(req.method, req.path);
  next();
});


app.post('/', (req, res) => {

  res.send('posted');
  
})

app.listen(3000, () => { console.log('listening on 3000...') });

