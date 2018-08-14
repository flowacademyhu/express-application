module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    billingAddressId: DataTypes.INTEGER,
    deliveryAddressId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['ordered', 'delivered', 'deleted'],
      defaultValue: 'ordered'
    }
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};
