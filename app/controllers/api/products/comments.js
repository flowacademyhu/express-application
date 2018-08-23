const express = require('express');
const commentsApi = express.Router({ mergeParams: true });
const models = require('../../../models');
const Comment = models.Comment;

// get all of the comments for the selected product
commentsApi.get('/', (req, res) => {
  Comment.findAll({
    where: {
      productId: req.productItem.id
    }
  }).then((productComments) => {
    res.json(productComments);
  });
});

module.exports = commentsApi;
