'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'encryptedPassword', Sequelize.STRING);
  },
  

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'encryptedPassword');
  }
};
