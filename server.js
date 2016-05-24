// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var jsonData = {count: 12, message: 'hey'};

const express =  require('express');
const fs = require('fs');

let app = express();

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html', (err) => {
    res.status(500).send(err);
  });
});

app.get('/data', (req,res) => {
  res.send(jsonData);
});

app.listen(3000, () => {
  console.log('listening on 3000')
});

