module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.Product, { foreignKey: 'productId' });
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Comment;
};
