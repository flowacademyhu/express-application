const express = require('express');
const admin = express.Router();

admin.use('/', (req, res, next) => {
  const isAdmin = true;
  if (!isAdmin) {
    res.redirect('/rodhadjon_meg_a_hacker');
  }
  next();
});

const products = require('./admin/products');
admin.use('/products', products);

const orders = require('./admin/orders');
admin.use('/orders', orders);

const categories = require('./admin/categories');
admin.use('/categories', categories);

module.exports = admin;
