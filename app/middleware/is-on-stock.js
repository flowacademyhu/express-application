const models = require('../models');
const CartLine = models.CartLine;
const Product = models.Product;

module.exports.isOnStock = (req, res, next) => {
  let id = req.params.id;
  let quantity = req.body.quantity;

  CartLine.findOne({
    where: {
      id: id
    },
    include: [
      {model: Product}
    ]
  }).then(results => {
    if (results.Product.onStock < quantity) {
      return Promise.reject(new Error());
    }

    next();
  }).catch(e => {
    res.redirect('/cart');
  });
};
