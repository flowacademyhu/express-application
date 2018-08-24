module.exports = (sequelize, DataTypes) => {
  var CartLine = sequelize.define('CartLine', {
    quantity: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  CartLine.associate = function (models) {
    CartLine.belongsTo(models.User, { foreignKey: 'userId' });
    CartLine.belongsTo(models.Product, { foreignKey: 'productId' });
  };
  return CartLine;
};
