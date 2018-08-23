const express = require('express');
const api = express.Router({mergeParams: true});

// APIs for users-data
const usersApi = require('./api/users');
api.use('/users', usersApi);

// APIs for products-data
const productsApi = require('./api/products');
api.use('/products', productsApi);

// APIs for categories-data and products by categories
const categoriesApi = require('./api/categories');
api.use('/categories', categoriesApi);

module.exports = api;
