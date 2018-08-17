'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Products', 'picturesFolder', 'picture');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Products', 'picture', 'picturesFolder');
  }
};
