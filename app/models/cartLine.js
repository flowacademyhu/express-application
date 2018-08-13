module.exports = (sequelize, DataTypes) => {
  var CartLine = sequelize.define('CartLine', {
    quantity: DataTypes.INTEGER
  }, {});
  CartLine.associate = function (models) {
    // associations can be defined here
  };
  return CartLine;
};
