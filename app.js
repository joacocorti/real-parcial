const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const siteCtrl = require('./controllers/site.controller');
const contactCtrl = require('./controllers/contact.controller');
const saleCtrl = require('./controllers/sale.controller');
const routes = require('./routes');
const config = require('./config');





mongoose.connect(config.databaseUrl, {useNewUrlParser: true ,useUnifiedTopology: true })
  .then(() => console.log('Database connection established'))
  .catch((error) => console.log(`MongoDB connection error: ${error}`));


