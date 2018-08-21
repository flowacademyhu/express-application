const express = require('express');
const comments = express.Router();
const models = require('../models');
const Comment = models.Comment;

// Create
comments.post('/', (req, res) => {
  Comment.create({
    productId: parseInt(req.body.productId),
    comment: req.body.comment
  }).then(comment => {
    res.status(200).redirect(`/products/${req.body.productId}`);
  }).catch(error => {
    res.status(500).json(error);
  });
});

/*
// Edit
comments.get('/:id/edit', (req, res) => {
  Comment.findById(req.params.id).then((commentRecord) => {
    let ctx = { comment: commentRecord };
    res.render('comments/edit.handlebars', ctx);
  });
});

// Update
comments.put('/:id', (req, res) => {
  Comment.findById(req.params.id).then((commentRecord) => {
    commentRecord.update(req.body).then((updatedCommentRecord) => {
      res.redirect('/comments');
    });
  });
});

// Destroy
comments.delete('/:id', (req, res) => {
  Comment.findById(req.params.id).then((commentRecord) => {
    commentRecord.destroy().then(() => {
      res.redirect('/comments');
    });
  });
});
*/

module.exports = comments;
