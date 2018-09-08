const express = require('express');
const cart = express.Router();
const models = require('../models');
const CartLine = models.CartLine;
const Product = models.Product;
const Order = models.Order;
const OrderLine = models.OrderLine;

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
    res.render('cart/index', {results});
  });
});

// UPDATE quantity of an item
cart.put('/:id', (req, res) => {
  CartLine.update({
    quantity: req.body.quantity
  }, { where: { id: req.params.id } }).then(user => {
    res.redirect(`/cart`);
  });
});

// DELETE item from a cart
cart.delete('/:id', (req, res) => {
  CartLine.findById(req.params.id).then(item => {
    item.destroy().then(() => {
      res.redirect(`/cart`);
    });
  });
});

// ORDER items from a cart
cart.get('/order', (req, res) => {
  collectCartLineItems(req.user.id)
    .then(orderLineItems => createOrder(req.user.id)
      .then(order => createOrderLines(orderLineItems, order)
        .then(() => res.redirect('/cart'))));
});

const collectCartLineItems = (id) => {
  return new Promise((resolve, reject) => {
    CartLine.findAll({
      where: {
        userId: id
      },
      include: [
        {model: Product}
      ]
    }).then(result => resolve(result));
  });
};

const createOrder = (id) => {
  return new Promise((resolve, reject) => {
    Order.create({ userId: id }).then(() => {
      Order.findOne({
        where: {
          userId: id,
          status: 'draft'
        }
      }).then(foundOrder => resolve(foundOrder));
    });
  });
};

const createOrderLines = (orderLineItems, order) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < orderLineItems.length; i++) {
      OrderLine.create({
        orderId: order.id,
        productId: orderLineItems[i].Product.id,
        unitPrice: orderLineItems[i].Product.price,
        quantity: orderLineItems[i].quantity
      }).then(() => {
        CartLine.findById(orderLineItems[i].id).then(item => {
          item.destroy();
        });
      });
    }
    Order.update({
      status: 'ordered'
    }, { where: { id: order.id } });
    resolve();
  });
};

module.exports = cart;
