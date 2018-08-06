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

users.get('/:id', (req, res) => {
  User.findById(req.params.id).then((userRecord) => {
    let ctx = {user: userRecord};
    res.render('users/show.handlebars', ctx);
  });
});

module.exports = users;
