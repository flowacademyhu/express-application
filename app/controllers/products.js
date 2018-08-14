const express = require('express');
const products = express.Router();
const models = require('../models');
const Product = models.Product;

// Show
products.get('/:id', (req, res) => {
  Product.findById(req.params.id).then((productRecord) => {
    let ctx = { product: productRecord };
    res.render('products/show.handlebars', ctx);
  });
});

module.exports = products;
