const express = require('express');
const products = express.Router();
const models = require('../../models');
const Product = models.Product;
const Category = models.Category;

// Index
products.get('/', (req, res) => {
  Product.findAll(
    {
      include: [
        {model: Category}
      ]
    }).then((allProduct) => {
    let ctx = { products: allProduct };
    res.render('admins/products/index.handlebars', ctx);
  });
});

// New
products.get('/new', (req, res) => {
  Category.findAll().then((allCategories) => {
    let ctx = { categories: allCategories };
    res.render('admins/products/new.handlebars', ctx);
  });
});

// Show
products.get('/:id', (req, res) => {
  Product.findById(req.params.id).then((getProduct) => {
    Category.findById(getProduct.categoryId).then((getCategory) => {
      const product = getProduct;
      const category = getCategory;
      let ctx = { product, category };
      res.render('admins/products/show.handlebars', ctx);
    });
  });
});

// Create
products.post('/', (req, res) => {
  let filename = Math.random().toString(36).substr(2, 16);
  if (req.files.image) {
    let image = req.files.image;
    image.mv((`./public/uploads/${filename}.jpg`), (error) => {
      if (error) {
        return res.send(error);
      }
    });
  }

  let productParams = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    onStock: req.body.onStock,
    categoryId: req.body.id
  };

  if (req.files.image) {
    productParams.picture = filename;
  }

  Product.create(productParams).then(product => {
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
      res.render('admins/products/edit.handlebars', ctx);
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
