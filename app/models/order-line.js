module.exports = (sequelize, DataTypes) => {
  var OrderLine = sequelize.define('OrderLine', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    unitPrice: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  OrderLine.associate = function (models) {
    OrderLine.belongsTo(models.Order, { foreignKey: 'orderId' });
    OrderLine.belongsTo(models.Product, { foreignKey: 'productId' });
  };
  return OrderLine;
};
