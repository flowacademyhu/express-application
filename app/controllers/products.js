const express = require('express');
const products = express.Router();
const models = require('../models');
const Product = models.Product;
const Comment = models.Comment;

// Show
products.get('/:id', (req, res) => {
  const getProduct = Product.findById(req.params.id);
  const getComments = Comment.FindAll({where: {productId: req.params.id}});
  Promise.all([getProduct, getComments]).then(results => {
    const product = results[0];
    const comments = results[1];
    let ctx = { product, comments };
    res.render('products/show.handlebars', ctx);
  });
});

module.exports = products;
