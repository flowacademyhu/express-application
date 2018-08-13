module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    onStock: DataTypes.INTEGER,
    picturesFolder: DataTypes.STRING,
    vat: DataTypes.INTEGER
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
