const express = require('express');
const cart = express.Router();
const models = require('../models');
const CartLine = models.CartLine;
const Product = models.Product;
const Order = models.Order;
const OrderLine = models.OrderLine;
const {isOnStock} = require('../middleware/is-on-stock');

// GET items of the cart
cart.get('/', (req, res) => {
  CartLine.findAll({
    where: {
      userId: req.user.id
    },
    include: [
      {model: Product}
    ]
  }).then(results => {
    res.json(results);

    for (let i = 0; i < results.length; i++) {
      OrderLine.create({

      }).then();
    }
  });
});

// // UPDATE quantity of an item
// cart.put('/:id', isOnStock, (req, res) => {
//   CartLine.update({
//     quantity: req.body.quantity
//   }, { where: { id: req.params.id } }).then(user => {
//     res.redirect(`/cart`);
//   });
// });

// // DELETE item from a cart
// cart.delete('/:id', (req, res) => {
//   CartLine.findById(req.params.id).then(item => {
//     item.destroy().then(() => {
//       res.redirect(`/cart`);
//     });
//   });
// });

module.exports = cart;
