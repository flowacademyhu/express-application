module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    id: DataTypes.STRING,
    parentId: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
  };
  return Category;
};
