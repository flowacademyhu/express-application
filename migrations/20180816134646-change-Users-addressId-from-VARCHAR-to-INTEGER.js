'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Users', 'addressId', {type: Sequelize.INTEGER});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Users', 'addressId', {type: Sequelize.VARCHAR});
  }
};
