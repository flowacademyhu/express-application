const express = require('express');
const orders = express.Router();
const models = require('../../models');
const Order = models.Order;
const User = models.User;

// Index
orders.get('/', (req, res) => {
  Order.findAll({
    include: [
      { model: User }
    ]
  }).then((allOrder) => {
    let ctx = { orders: allOrder };
    res.render('admins/orders/index.handlebars', ctx);
    /*   res.json(allOrder); */
  });
});

// Filtered list
orders.get('/filtered/:status', (req, res, next) => {
  Order.findAll({
    where: { status: req.params.status },
    include: [
      { model: User }
    ]
  }).then((allOrder) => {
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
  Order.findById(req.params.id,
    {
      include: [
        { model: User }
      ]
    }).then((orderRecord) => {
    let ctx = { order: orderRecord };
    /* res.json(orderRecord); */
    res.render('admins/orders/show.handlebars', ctx);
  });
});

// Create
orders.post('/', (req, res) => {
  Order.create({
    userId: req.body.userId,
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
    let statuses = [
      { value: 'ordered', label: 'Ordered', isSelected: (orderRecord.status === 'ordered') },
      { value: 'delivered', label: 'Delivered', isSelected: (orderRecord.status === 'delivered') },
      { value: 'deleted', label: 'Deleted', isSelected: (orderRecord.status === 'deleted') }
    ];
    let ctx = { order: orderRecord, statuses };
    res.render('admins/orders/edit.handlebars', ctx);
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

module.exports = orders;
