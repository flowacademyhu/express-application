'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CartLines',
      [
        {
          quantity: 2,
          productId: 1,
          userId: 2,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          quantity: 3,
          productId: 2,
          userId: 2,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          quantity: 1,
          productId: 3,
          userId: 2,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          quantity: 2,
          productId: 1,
          userId: 2,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          quantity: 2,
          productId: 2,
          userId: 3,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CartLines', null, {});
  }
};
