const express = require('express');
const usersApi = express.Router({mergeParams: true});
const models = require('../../models');
const User = models.User;

usersApi.param('userId', (req, res, next, id) => {
  User.findById(id).then((userRecord) => {
    req.user = userRecord;
    next();
  });
});

// all of the users
usersApi.get('/', (req, res) => {
  User.findAll().then((allUser) => {
    res.json(allUser);
  });
});

// get a specific user
usersApi.get('/:userId', (req, res) => {
  res.json(req.user);
});

const ordersApi = require('./users/orders');
usersApi.use('/:userId/orders', ordersApi);

const cartlinesApi = require('./users/cart-lines');
usersApi.use('/:userId/cart-lines', cartlinesApi);

module.exports = usersApi;
