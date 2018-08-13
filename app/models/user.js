module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('User', {
    userName: DataTypes.STRING,
    role: {
      type: DatyaTypes.ENUM,
      values: ['user', 'admin'],
      defaultValue: 'user'
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING,
    addressId: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    lastLoginAt: Datatypes.DATE
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
