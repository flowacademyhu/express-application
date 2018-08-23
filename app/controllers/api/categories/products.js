const express = require('express');
const productsApi = express.Router({mergeParams: true});
const models = require('../../../models');
const Product = models.Product;

// get the products for the selected category
productsApi.get('/', (req, res) => {
  Product.findAll({
    where: {
      categoryId: req.categoryItem.id
    }
  }).then((filteredProducts) => {
    res.json(filteredProducts);
  });
});

module.exports = productsApi;
