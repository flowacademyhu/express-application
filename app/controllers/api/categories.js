const express = require('express');
const categoriesApi = express.Router({ mergeParams: true });
const models = require('../../models');
const Category = models.Category;

categoriesApi.param('categoryId', (req, res, next, id) => {
  Category.findById(id).then((categoryItem) => {
    req.categoryItem = categoryItem;
    next();
  });
});

// all of the categories
categoriesApi.get('/', (req, res) => {
  Category.findAll({
    attributes: ['name']
  }).then((inAllCategory) => {
    res.json(inAllCategory);
  });
});

// get subcategories
categoriesApi.get('/:id', (req, res) => {
  Category.findAll({
    attributes: ['name'],
    where: {
      parentId: req.params.id
    }
  }).then((subcategory) => {
    res.json(subcategory);
  });
});

const productsApi = require('./categories/products');
categoriesApi.use('/:categoryId/products', productsApi);

module.exports = categoriesApi;
