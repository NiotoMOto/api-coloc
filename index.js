const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config.json');

const app = express();

const apiRoutes = require('./routes/api');
const publicRoutes = require('./routes/public');

const populateDatabase = require('./data/populate.js');

const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const formatOut = bformat({ outputMode: 'short' })
const log = bunyan.createLogger({name: "coloquons-api", stream: formatOut});

const logger = function(req, res, next) {
  log.info(req.method, req.url, req.params);
  next();
}
console.log(config.clients.toString());
app.use(logger);
app.use(cors({
	origin: config.clients.toString(),
	credentials: true
}));
app.use(bodyParser.json());
app.use(methodOverride());


if(process.env.NODE_ENV !== 'production') {
  populateDatabase();
}

app.use(apiRoutes);
app.use(publicRoutes);

app.listen(4001, function () {
  console.log('Express server listening on port 4001')
});
