const express = require('express');
const categories = express.Router();
const models = require('../../models');
const Category = models.Category;

// Index
categories.get('/', (req, res) => {
  Category.findAll().then((allCategories) => {
    let ctx = { categories: allCategories };
    res.render('admins/categories/index.handlebars', ctx);
  });
});

// New
categories.get('/new', (req, res) => {
  Category.findAll().then((allCategories) => {
    let ctx = { categories: allCategories };
    res.render('admins/categories/new.handlebars', ctx);
  });
});

// Show
categories.get('/:id', (req, res) => {
  Category.findById(req.params.id).then((categoryRecord) => {
    let ctx = { category: categoryRecord };
    res.render('admins/categories/show.handlebars', ctx);
  });
});

// Create
categories.post('/', (req, res) => {
  Category.create({
    parentId: req.body.parentId,
    name: req.body.categoryName
  }).then(category => {
    res.status(200).redirect('/admin/categories');
  }).catch(error => {
    res.status(500).json(error);
  });
});

// Edit
categories.get('/:id/edit', (req, res) => {
  Category.findById(req.params.id).then((categoryRecord) => {
    let ctx = { category: categoryRecord };
    res.render('admins/categories/edit.handlebars', ctx);
  });
});

// Update
categories.put('/:id', (req, res) => {
  Category.findById(req.params.id).then((categoryRecord) => {
    categoryRecord.update(req.body).then((updatedCategoryRecord) => {
      res.redirect('/admin/categories');
    });
  });
});

// Destroy
categories.delete('/:id', (req, res) => {
  Category.findById(req.params.id).then((categoryRecord) => {
    categoryRecord.destroy().then(() => {
      res.redirect('/admin/categories');
    });
  });
});

module.exports = categories;
