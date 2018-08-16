const express = require('express');
const cart = express.Router();
const models = require('../models');
const CartLine = models.CartLine;
const Product = models.Product;
const {Op} = require('sequelize');

// Index
cart.get('/', (req, res) => {
  CartLine.findAll({
    where: {
      userId: 2
    }
  }).then((cartItems) => {
    let productIdList = [];
    for (let i = 0; i < cartItems.length; i++) {
      productIdList[i] = cartItems[i].productId;
    }
    Product.findAll({
      where: {
        id: {
          [Op.or]: productIdList
        }
      }
    }).then(products => {
      let itemsToRender = [];
      for (let i = 0; i < cartItems.length; i++) {
        for (let j = 0; j < products.length; j++) {
          if (cartItems[i].productId === products[j].id) {
            itemsToRender.push({
              name: products[j].name,
              description: products[j].description,
              price: products[j].price,
              vat: products[j].vat,
              quantity: cartItems[i].quantity
            });
          }
        }
      }
      res.render('cart/index', {itemsToRender});
    });
  });
});

module.exports = cart;
