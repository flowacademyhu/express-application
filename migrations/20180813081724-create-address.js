module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      zip: {
        allowNull: false,
        type: Sequelize.STRING
      },
      county: {
        allowNull: false,
        type: Sequelize.STRING
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING
      },
      houseNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      floor: {
        allowNull: true,
        type: Sequelize.STRING
      },
      door: {
        allowNull: true,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses');
  }
};