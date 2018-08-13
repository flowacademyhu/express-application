'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comments');
  }
};
