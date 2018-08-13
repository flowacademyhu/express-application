module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Addresses', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    county: DataTypes.STRING,
    street: DataTypes.STRING,
    houseNumber: DataTypes.STRING,
    floor: DataTypes.STRING,
    door: DataTypes.STRING
  }, {});
  Address.associate = function (models) {
    // associations can be defined here
  };
  return Address;
};
