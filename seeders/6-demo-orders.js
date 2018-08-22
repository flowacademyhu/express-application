'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders',
      [
        {
          userId: 1,
          status: 'ordered',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          userId: 2,
          status: 'ordered',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          userId: 3,
          status: 'ordered',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
