const express = require('express');
const admin = express.Router();
const models = require('../models');
const User = models.User;
const Token = models.Token;

admin.use('/', (req, res, next) => {
  Token.findOne({
    where: { token: req.cookies.token },
    include: [
      { model: User }
    ]})
    .then((tokenRecord) => {
      if (tokenRecord.User.role === 'admin') {
        next();
      } else {
        res.redirect('/');
      }
    });
});

admin.get('/', (req, res) => {
  res.render('admins/index.handlebars');
});

const products = require('./admin/products');
admin.use('/products', products);

const orders = require('./admin/orders');
admin.use('/orders', orders);

const categories = require('./admin/categories');
admin.use('/categories', categories);

const users = require('./admin/users');
admin.use('/users', users);

module.exports = admin;
