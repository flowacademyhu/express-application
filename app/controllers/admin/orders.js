const express = require('express');
const orders = express.Router();
const models = require('../../models');
const Order = models.Order;

// Index
orders.get('/', (req, res) => {
  Order.findAll().then((allOrder) => {
    let ctx = { orders: allOrder };
    res.render('admins/orders/index.handlebars', ctx);
  });
});

// New
orders.get('/new', (req, res) => {
  res.render('admins/orders/new.handlebars');
});

// Show
orders.get('/:id', (req, res) => {
  Order.findById(req.params.id).then((orderRecord) => {
    let ctx = { order: orderRecord };
    res.render('admins/orders/show.handlebars', ctx);
  });
});

// Create
orders.post('/', (req, res) => {
  Order.create({
    userId: req.body.userId,
    email: req.body.email,
    billingAddressId: req.body.billingAddressId,
    deliveryAddressId: req.body.deliveryAddressId,
    status: req.body.status
  }).then(user => {
    res.status(200).redirect('/admin/orders');
  }).catch(error => {
    res.status(500).json(error);
  });
});

// Edit
orders.get('/:id/edit', (req, res) => {
  Order.findById(req.params.id).then((orderRecord) => {
    let ctx = { order: orderRecord };
    res.render('admins/orders/edit.handlebars', ctx);
  });
});

// Change Status
orders.get('/:id/chst', (req, res) => {
  Order.findById(req.params.id).then((orderRecord) => {
    let ctx = { order: orderRecord };
    res.render('admins/orders/chst.handlebars', ctx);
  });
});

// Update
orders.put('/:id', (req, res) => {
  Order.findById(req.params.id).then((orderRecord) => {
    orderRecord.update(req.body).then((updatedOrderRecord) => {
      res.redirect('/admin/orders');
    });
  });
});

// Destroy
orders.delete('/:id', (req, res) => {
  Order.findById(req.params.id).then((orderRecord) => {
    orderRecord.destroy().then(() => {
      res.redirect('/admin/orders');
    });
  });
});

module.exports = orders;
