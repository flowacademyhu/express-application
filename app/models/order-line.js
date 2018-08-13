module.exports = (sequelize, DataTypes) => {
  var OrderLine = sequelize.define('OrderLines', {
    unitPrice: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  OrderLine.associate = function (models) {
    // associations can be defined here
  };
  return OrderLine;
};
