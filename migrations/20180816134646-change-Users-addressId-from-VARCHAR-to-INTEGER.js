'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Users', 'addressId', {type: Sequelize.INTEGER});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Users', 'addressId', {type: Sequelize.VARCHAR});
  }
};
