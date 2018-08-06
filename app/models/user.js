module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define('User', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ['normal', 'admin'],
      defaultValue: 'normal'
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
  return user;
};
