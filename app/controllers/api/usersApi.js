const express = require('express');
const usersApi = express.Router();
const models = require('../../models');
const User = models.User;

usersApi.get('/', (req, res) => {
  User.findAll().then((allUser) => {
    res.json(allUser);
  });
});

module.exports = usersApi;
