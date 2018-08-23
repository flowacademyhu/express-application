module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['draft', 'ordered', 'delivered', 'deleted'],
      defaultValue: 'draft'
    }
  }, {});
  Order.associate = function (models) {
    Order.hasMany(models.OrderLine, { foreignKey: 'orderId' });
    Order.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Order;
};
