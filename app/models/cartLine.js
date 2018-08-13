module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('CartLine', {
    quantity: DataTypes.INTEGER
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
