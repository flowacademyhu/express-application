'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('OrderLines', 'userId', 'orderId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('OrderLines', 'orderId', 'userId');
  }
};
