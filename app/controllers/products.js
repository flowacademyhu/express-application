const express = require('express');
const products = express.Router();
const models = require('../models');
const Product = models.Product;
const Comment = models.Comment;
const User = models.User;
const CartLine = models.CartLine;

// Show
products.get('/:id', (req, res) => {
  const getProduct = Product.findById(req.params.id);
  const getComments = Comment.findAll({where: {productId: req.params.id}, include: [{model: User}]});
  Promise.all([getProduct, getComments]).then(results => {
    const product = results[0];
    const comments = results[1];
    let ctx = { product, comments, user: req.user };
    // res.json(ctx);
    res.render('products/show.handlebars', ctx);
  });
});

// ADD items to cart
products.put('/:id', (req, res) => {
  // res.json({productId: req.params.id, userId: req.user.id, quantity: req.body.quantity});
  CartLine.create({
    quantity: req.body.quantity,
    productId: req.params.id,
    userId: req.user.id
  }).then(() => {
    res.redirect(`/products/${req.params.id}`);
  });
});

module.exports = products;
