const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

const apiRoutes = require('./routes/api');
const publicRoutes = require('./routes/public');

const populateDatabase = require('./data/populate.js');

app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride());

if(process.env.NODE_ENV !== 'production') {
  populateDatabase();
}

app.use(apiRoutes);
app.use(publicRoutes);

app.listen(4001, function () {
  console.log('Express server listening on port 3000')
});
