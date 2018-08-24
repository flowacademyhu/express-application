const express = require('express');
const indeces = express.Router();
const models = require('../models');
const Category = models.Category;
const Product = models.Product;
const CartLine = models.CartLine;

let tempCatId;

// Show
indeces.get('/', (req, res) => {
  const getCategory = Category.findById(30);
  const getProducts = Product.findAll({ where: { categoryId: 30 } });
  tempCatId = 30;
  Promise.all([getCategory, getProducts]).then(results => {
    const category = results[0];
    const products = results[1];
    let ctx = { category, products };
    res.render('index.handlebars', ctx);
  });
});

// ADD items to cart
indeces.put('/:id', (req, res) => {
  // res.json({categoryId: tempCatId, productId: req.params.id, userId: req.user.id, quantity: req.body.quantity});
  CartLine.create({
    quantity: req.body.quantity,
    productId: req.params.id,
    userId: req.user.id
  }).then(() => {
    res.redirect(`/`);
  });
});


module.exports = indeces;
