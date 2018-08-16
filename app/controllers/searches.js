const express = require('express');
const searches = express.Router();
const models = require('../models');
const Product = models.Product;
const Sequelize = require('sequelize');

// Index
searches.get('/', (req, res) => {
  Product.findAll({
    where: {
      [Sequelize.Op.or]: [
        {
          name: { [Sequelize.Op.like]: '%' + req.query.search + '%' }
        },
        {
          description: {
            [Sequelize.Op.like]: '%' + req.query.search + '%'
          }
        }
      ]
    }
  }).then((searchedProduct) => {
    let ctx = { products: searchedProduct };
    res.render('search/index', ctx);
  });
});

module.exports = searches;
