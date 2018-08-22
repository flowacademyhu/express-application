module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    // vat: DataTypes.INTEGER,
    onStock: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  Product.associate = function (models) {
    Product.hasMany(models.OrderLine, { foreignKey: 'productId' });
    Product.hasMany(models.CartLine, { foreignKey: 'productId' });
    Product.hasMany(models.Comment, { foreignKey: 'productId' });
    Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
  };
  return Product;
};
