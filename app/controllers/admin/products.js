const express = require('express');
const products = express.Router();
const models = require('../../models');
const Product = models.Product;

// Index
products.get('/', (req, res) => {
  Product.findAll().then((allProduct) => {
    let ctx = { products: allProduct };
    res.render('products/index.handlebars', ctx);
  });
});

// New
products.get('/new', (req, res) => {
  res.render('products/new.handlebars');
});

// Show
products.get('/:id', (req, res) => {
  Product.findById(req.params.id).then((productRecord) => {
    let ctx = { product: productRecord };
    res.render('products/show.handlebars', ctx);
  });
});

// Create
products.post('/', (req, res) => {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    onStock: req.body.onStock
  }).then(product => {
    res.status(200).redirect('/products');
  }).catch(error => {
    res.status(500).json(error);
  });
});

// Edit
products.get('/:id/edit', (req, res) => {
  Product.findById(req.params.id).then((productRecord) => {
    let ctx = { product: productRecord };
    res.render('products/edit.handlebars', ctx);
  });
});

// Update
products.put('/:id', (req, res) => {
  Product.findById(req.params.id).then((productRecord) => {
    productRecord.update(req.body).then((updatedProductRecord) => {
      res.redirect('/products');
    });
  });
});

// Destroy
products.delete('/:id', (req, res) => {
  Product.findById(req.params.id).then((productRecord) => {
    productRecord.destroy().then(() => {
      res.redirect('/products');
    });
  });
});

module.exports = products;
