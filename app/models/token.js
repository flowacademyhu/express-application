module.exports = (sequelize, DataTypes) => {
	var Token = sequelize.define('Token', {
		userId: DataTypes.INTEGER,
		token: DataTypes.STRING
	}, {});
	Token.associate = (models) => {
		Token.belongsTo(models.User, { foreignKey: 'userId' });
	};
	return Token;
};