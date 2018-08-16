module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    onStock: DataTypes.INTEGER,
    picturesFolder: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
    //vat: DataTypes.INTEGER
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
