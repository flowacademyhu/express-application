module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
  };
  return Comment;
};
