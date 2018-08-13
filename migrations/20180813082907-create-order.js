'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      billingAddressId: {
        type: Sequelize.INTEGER
      },
      deliveryAddressId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('ordered', 'delivererd'),
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};
