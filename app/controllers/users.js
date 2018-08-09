const express = require('express');
const users = express.Router();
const models = require('../models');
const User = models.User;

// Index
users.get('/', (req, res) => {
  User.findAll().then((allUser) => {
    let ctx = { users: allUser };
    res.render('users/index.handlebars', ctx);
  });
});

// New
users.get('/new', (req, res) => {
  res.render('users/new.handlebars');
});

// Show
users.get('/:id', (req, res) => {
  User.findById(req.params.id).then((userRecord) => {
    let ctx = { user: userRecord };
    res.render('users/show.handlebars', ctx);
  });
});

// Create
users.post('/', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }).then(user => {
    res.status(200).redirect('/users');
  }).catch(error => {
    res.status(500).json(error);
  });
});

// Edit
users.get('/:id/edit', (req, res) => {
  User.findById(req.params.id).then((userRecord) => {
    let ctx = { user: userRecord };
    res.render('users/edit.handlebars', ctx);
  });
});

// Update
users.put('/:id', (req, res) => {
  User.findById(req.params.id).then((userRecord) => {
    userRecord.update(req.body).then((updatedUserRecord) => {
      res.redirect('/users');
    });
  });
});

module.exports = users;
