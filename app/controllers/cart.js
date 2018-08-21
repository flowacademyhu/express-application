const express = require('express');
const cart = express.Router();
const models = require('../models');
const CartLine = models.CartLine;
const Product = models.Product;

// Index
cart.get('/', (req, res) => {
  CartLine.findAll({
    where: {
      userId: 1
    },
    include: [
      {model: Product}
    ]
  }).then(results => {
    res.render('cart/index', {results});
  });
});

module.exports = cart;
