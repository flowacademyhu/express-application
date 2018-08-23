const express = require('express');
const productsApi = express.Router({mergeParams: true});
const models = require('../../models');
const Product = models.Product;

productsApi.param('productId', (req, res, next, id) => {
  Product.findById(id).then((productRecord) => {
    req.productItem = productRecord;
    next();
  });
});

// all of the products
productsApi.get('/', (req, res) => {
  Product.findAll().then((allProduct) => {
    res.json(allProduct);
  });
});

// get a specific product
productsApi.get('/:id', (req, res) => {
  Product.findById(req.params.id).then((productItem) => {
    res.json(productItem);
  });
});

const commentsApi = require('./products/comments');
productsApi.use('/:productId/comments', commentsApi);

module.exports = productsApi;
