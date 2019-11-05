const apps = require('./app');
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


const app = express();
    app.use(cookieParser());
    app.use(session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', siteCtrl.renderHomeSection);
app.get('/propiedad/:slug/', siteCtrl.renderPropertyDetailSection);
app.get('/alquiler', siteCtrl.renderPropertiesForRentSection);
app.get('/venta', siteCtrl.renderPropertiesForSaleSection);
app.get('/contacto', siteCtrl.renderContactSection);
app.post('/contacto', contactCtrl.validateContactForm , contactCtrl.sendMessageContact);
app.post('/contacto', [check('email').isEmail()], contactCtrl.sendMessageContact);
app.post('/contacto', [check('email').isEmail()], contactCtrl.sendMessageContact);

// start server
app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));

