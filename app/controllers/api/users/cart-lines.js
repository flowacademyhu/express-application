const express = require('express');
const cartlinesApi = express.Router({mergeParams: true});

// get the cart-lines for the selected user
cartlinesApi.get('/', (req, res) => {
  req.user.getCartLines().then((userCartline) => {
    res.json(userCartline);
  });
});

module.exports = cartlinesApi;
