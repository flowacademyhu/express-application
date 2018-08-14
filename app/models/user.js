module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userName: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'],
      defaultValue: 'user'
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING,
    addressId: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    lastLoginAt: DataTypes.DATE
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};


