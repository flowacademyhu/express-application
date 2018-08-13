module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mainCategory: {
        type: Sequelize.BOOLEAN
      },
      subCategory: {
        type: Sequelize.BOOLEAN
      },
      name: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Category');
  }
};
