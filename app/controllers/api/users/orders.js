const express = require('express');
const ordersApi = express.Router({ mergeParams: true });

// get all of the orders for the selected user
ordersApi.get('/', (req, res) => {
  req.user.getOrders().then((allOrder) => {
    res.json(allOrder);
  });
});

// get a specific order for the selected user
ordersApi.get('/:id', (req, res) => {
  req.user.getOrders().then((allOrder) => {
    let orderRecord = allOrder[req.params.id];
    res.json(orderRecord);
  });
});

module.exports = ordersApi;
