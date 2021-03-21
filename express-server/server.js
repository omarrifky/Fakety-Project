// requires
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
// // redis
// var redis = require('redis');


// environment variables
process.env.NODE_ENV = 'development';

// Get our API routes
const api = require('./routes/api');

// config variables
const config = require('./config/config.js');

// module variables
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Set our api routes
app.use('/', api);

app.get('/', (req, res) => {
    res.json(global.gConfig);
});

const server = http.createServer(app);
server.listen(global.gConfig.node_port, () => console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`));
