'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Orders', 'email');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Orders', 'email', {
      type: Sequelize.INTEGER
    });
  }
};
