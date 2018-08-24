module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    parentId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    Category.hasMany(models.Product, { foreignKey: 'categoryId' });
  };
  return Category;
};
