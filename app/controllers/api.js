const express = require('express');
const api = express.Router();

const usersApi = require('./api/usersApi');
api.use('/users-api', usersApi);

module.exports = api;
