const express = require('express');
const cart = express.Router();
const models = require('../models');
const CartLine = models.CartLine;
const Product = models.Product;

// Index
cart.get('/', (req, res) => {
  CartLine.findAll({
    include: [
      {model: Product}
    ]
  }).then(results => {
    res.send(results);
  });
});

module.exports = cart;
