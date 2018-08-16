module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    // vat: DataTypes.INTEGER,
    onStock: DataTypes.INTEGER,
    pictures: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
