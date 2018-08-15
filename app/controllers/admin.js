const express = require('express');
const admin = express.Router();
const bodyParser = require('body-parser');

admin.use('/admin', (req, res, extra) => {
  const isAdmin = true;
  if (!isAdmin) {
    res.redirect('/rodhadjon_meg_a_hacker');
  }
});

const products = require('./admin/products');
admin.use(bodyParser.urlencoded({extended: false}));
admin.use(bodyParser.json());
admin.use('/products', products);

const orders = require('./admin/orders');
admin.use(bodyParser.urlencoded({extended: false}));
admin.use(bodyParser.json());
admin.use('/orders', orders);

const categories = require('./admin/categories');
admin.use(bodyParser.urlencoded({extended: false}));
admin.use(bodyParser.json());
admin.use('/categories', categories);

module.exports = admin;
