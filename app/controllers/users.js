const express = require('express');
const users = express.Router();
const models = require('../models');
const User = models.User;

users.get('/', (req, res) => {
  User.findAll().then((allUser) => {
    let ctx = {users: allUser};
    res.render('users/index.handlebars', ctx);
  });
});

users.get('/new', (req, res) => {
  res.render('new');
});

module.exports = users;
