const express = require('express');
const searches = express.Router();
const models = require('../models');
const Product = models.Product;
const CartLine = models.CartLine;
const Sequelize = require('sequelize');

let tempQuery;

// Index
searches.get('/', (req, res) => {
  tempQuery = req.query.search;
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
    let ctx = { products: searchedProduct, user: req.user };
    res.render('search/index', ctx);
  });
});

// ADD items to cart
searches.put('/:id', (req, res) => {
  // res.json({categoryId: tempCatId, productId: req.params.id, userId: req.user.id, quantity: req.body.quantity});
  CartLine.create({
    quantity: req.body.quantity,
    productId: req.params.id,
    userId: req.user.id
  }).then(() => {
    res.redirect(`/search/?search=${tempQuery}`);
  });
});

module.exports = searches;
