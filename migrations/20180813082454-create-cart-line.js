'use strict';
// /!w FK's
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CartLines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CartLines');
  }
};
