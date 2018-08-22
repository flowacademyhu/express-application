const express = require('express');
const categories = express.Router();
const models = require('../models');
const Category = models.Category;
const Product = models.Product;

// Build breadcrumb
const buildBreadcrumb = (id, elements) => {
  Category.findById(id).then(categoryRecord => {
    elements.shift(categoryRecord);
    if (categoryRecord.parentId) {
      buildBreadcrumb(categoryRecord.parentId, elements);
    }
  });
};

// Show
categories.get('/:id', (req, res) => {
  let breadcrumb = [];
  buildBreadcrumb(req.params.id, breadcrumb);
  const getCategory = Category.findById(req.params.id);
  const getProducts = Product.findAll({where: {categoryId: req.params.id}});
  Promise.all([getCategory, getProducts]).then(results => {
    const category = results[0];
    const products = results[1];
    let ctx = { category, products };
    res.render('categories/show.handlebars', ctx);
  });
});

module.exports = categories;
