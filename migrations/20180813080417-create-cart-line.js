module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CartLines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.UUID,
            references: {
              model: 'Users',
              key: 'id',
            },
      productID: {
        type: Sequelize.UUID,
            references: {
              model: 'Product',
              key: 'id',
            },
      price: {
        type: Sequelize.UUID,
            references: {
              model: 'Product',
              key: 'price',
            },
      quantity: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CartLines');
  }
};