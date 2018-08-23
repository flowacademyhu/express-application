const express = require('express');
const users = express.Router();
const models = require('../../models');
const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const User = models.User;
const Token = models.Token;

// Index
users.get('/', (req, res) => {
  User.findAll().then((allUser) => {
    let ctx = { users: allUser };
    res.render('admins/users/index.handlebars', ctx);
  });
});

// Login

users.get('/login', (req, res) => {
  res.render('admins/users/login.handlebars');
});

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then((userRecord) => {
    if (!userRecord) return res.redirect('/users/login');
    bcrypt.compare(req.body.password, userRecord.encryptedPassword, (err, result) => {
      if (result) {
        let tokenField = randomstring.generate();
        Token.create({
          userId: userRecord.id,
          token: tokenField
        }).then(tokenRecord => {
          res.cookie('token', tokenField);
          res.redirect('/users'); // ha lesz nyitó oldal, akkor oda kell irányítani
        });
      } else {
        res.redirect('/users/login');
      }
      console.log(err);
    });
  });
});

// Logout
users.get('/logout', (req, res) => {
  Token.findOne({
    where: {
      token: req.cookies.token
    }
  }).then((tokenRecord) => {
    tokenRecord.destroy().then(() => {
      res.clearCookie('token', null);
      res.redirect('/users/login');
    });
  });
});

// Show
users.get('/:id', (req, res) => {
  User.findById(req.params.id).then((userRecord) => {
    let ctx = { user: userRecord };
    res.render('admins/users/show.handlebars', ctx);
  });
});

// Create
users.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.encryptedPassword,
    country: req.body.country,
    city: req.body.city,
    zip: req.body.zip,
    county: req.body.county,
    street: req.body.street,
    houseNumber: req.body.houseNumber,
    floor: req.body.floor,
    door: req.body.door
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
    res.render('admins/users/edit.handlebars', ctx);
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
