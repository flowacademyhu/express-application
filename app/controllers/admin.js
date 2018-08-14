const express = require('express');
const admin = express.Router();

admin.use('/admin', (req, res, extra) => {
  const isAdmin = true;
  if (!isAdmin) {
    res.redirect('/rodhadjon_meg_a_hacker');
  }
});

const product = require('./admin/products');
admin.use('/admin', product);

module.exports = admin;
