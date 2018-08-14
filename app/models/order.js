module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userID: DataTypes.INTEGER,
    email: DataTypes.STRING,
    billingAddressId: DataTypes.INTEGER,
    deliveryAddressId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['ordered', 'delivered'],
      defaultValue: 'ordered'
    }
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};
