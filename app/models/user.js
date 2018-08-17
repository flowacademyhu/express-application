module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'],
      defaultValue: 'user'
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING,
    addressId: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.CartLine, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });
    User.hasMany(models.Order, { foreignKey: 'userId' });
    User.belongsTo(models.Address, { foreignKey: 'addressId' });
  };
  return User;
};
