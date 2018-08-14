const express = require('express');
const categories = express.Router();
const models = require('../models');
const Category = models.Category;
const Product = models.Product;

// Show
categories.get('/:id', (req, res) => {
  const getCategory = Category.findById(req.params.id);
  const getProducts = Product.FindAll({where: {categoryId: req.params.id}});
  Promise.all([getCategory, getProducts]).then(results => {
    const category = results[0];
    const products = results[1];
    let ctx = { category, products };
    res.render('categories/show.handlebars', ctx);
  });
});

module.exports = categories;
