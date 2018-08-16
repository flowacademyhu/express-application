const express = require('express');
const products = express.Router();
const models = require('../../models');
const Product = models.Product;
const Category = models.Category;

// Index
products.get('/', (req, res) => {
  Product.findAll().then((allProduct) => {
    let ctx = { products: allProduct };
    res.render('products/admin/index.handlebars', ctx);
  });
});

// New
products.get('/new', (req, res) => {
  Category.findAll().then((allCategories) => {
    let ctx = { categories: allCategories };
    res.render('products/admin/new.handlebars', ctx);
  });
});

// Show
products.get('/:id', (req, res) => {
  Product.findById(req.params.id).then((getProduct) => {
    Category.findById(getProduct.categoryId).then((getCategory) => {
      const product = getProduct;
      const category = getCategory;
      let ctx = { product, category };
      res.render('products/admin/show.handlebars', ctx);
    });
  });
});

// Create
products.post('/', (req, res) => {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    onStock: req.body.onStock,
    categoryId: req.body.id

  }).then(product => {
    res.status(200).redirect('/admin/products');
  }).catch(error => {
    res.status(500).json(error);
  });
});

// Edit
products.get('/:id/edit', (req, res) => {
  Product.findById(req.params.id).then((getProduct) => {
    Category.findAll().then((getCategory) => {
      const product = getProduct;
      const category = getCategory;
      let ctx = { product, category };
      res.render('products/admin/edit.handlebars', ctx);
    });
  });
});

// Update
products.put('/:id', (req, res) => {
  Product.findById(req.params.id).then((productRecord) => {
    productRecord.update(req.body).then((updatedProductRecord) => {
      res.redirect('/admin/products');
    });
  });
});

// Destroy
products.delete('/:id', (req, res) => {
  Product.findById(req.params.id).then((productRecord) => {
    productRecord.destroy().then(() => {
      res.redirect('/admin/products');
    });
  });
});

module.exports = products;
