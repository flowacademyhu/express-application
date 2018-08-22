'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Orders', 'status', {type: Sequelize.ENUM('draft', 'ordered', 'delivered', 'deleted')});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Orders', 'status', {type: Sequelize.ENUM('ordered', 'delivered', 'deleted')});
  }
};
