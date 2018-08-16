'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('OrderLines', 'userId', 'orderId');
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('OrderLines', 'orderId', 'userId');
  }
};
