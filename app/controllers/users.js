const express = require('express');
const users = express.Router();
const models = require('../models');
const User = models.User;

users.get('/', (req, res) => {
  res.render('index');
});

users.get('/new', (req, res) => {
  res.render('new');
});

module.exports = users;
