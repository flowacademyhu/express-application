const express = require('express');
const categories = express.Router();
const models = require('../models');
const Category = models.Category;
const Product = models.Product;
const CartLine = models.CartLine;

let tempCatId;

// Show
categories.get('/:id', (req, res) => {
  const getCategory = Category.findById(req.params.id);
  const getProducts = Product.findAll({where: {categoryId: req.params.id}});
  tempCatId = req.params.id;
  Promise.all([getCategory, getProducts]).then(results => {
    const category = results[0];
    const products = results[1];
    let ctx = { category, products };
    res.render('categories/show.handlebars', ctx);
  });
});

// ADD items to cart
categories.put('/:id', (req, res) => {
  // res.json({categoryId: tempCatId, productId: req.params.id, userId: req.user.id, quantity: req.body.quantity});
  CartLine.create({
    quantity: req.body.quantity,
    productId: req.params.id,
    userId: req.user.id
  }).then(() => {
    res.redirect(`/categories/${tempCatId}`);
  });
});

module.exports = categories;
