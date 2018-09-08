'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: false,
      require: true,
      unique: true
    }).then(() => {
      return queryInterface.changeColumn('Users', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
        unique: true
      }).then(() => {
        return queryInterface.changeColumn('Users', 'encryptedPassword', {
          type: Sequelize.STRING,
          allowNull: false,
          require: true
        });
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
