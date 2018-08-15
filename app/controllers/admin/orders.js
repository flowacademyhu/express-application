const express = require('express');
const orders = express.Router();
const models = require('../../models');
const Order = models.Order;

// Index
orders.get('/', (req, res) => {
  Order.findAll().then((allOrder) => {
    let ctx = { orders: allOrder };
    res.render('orders/index.handlebars', ctx);
  });
});

/*
// New
orders.get('/new', (req, res) => {
  res.render('orders/new.handlebars');
});
 */

// Show
orders.get('/:id', (req, res) => {
  Order.findById(req.params.id).then((orderRecord) => {
    let ctx = { order: orderRecord };
    res.render('orders/show.handlebars', ctx);
  });
});

// Create
orders.post('/', (req, res) => {
  Order.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    encryptedPassword: req.body.encryptedPassword
  }).then(user => {
    res.status(200).redirect('/orders');
  }).catch(error => {
    res.status(500).json(error);
  });
});

// Edit
orders.get('/:id/edit', (req, res) => {
  Order.findById(req.params.id).then((orderRecord) => {
    let ctx = { order: orderRecord };
    res.render('orders/edit.handlebars', ctx);
  });
});

// Update
orders.put('/:id', (req, res) => {
  Order.findById(req.params.id).then((orderRecord) => {
    orderRecord.update(req.body).then((updatedOrderRecord) => {
      res.redirect('/orders');
    });
  });
});

// Destroy
orders.delete('/:id', (req, res) => {
  Order.findById(req.params.id).then((orderRecord) => {
    orderRecord.destroy().then(() => {
      res.redirect('/orders');
    });
  });
});

module.exports = orders;
