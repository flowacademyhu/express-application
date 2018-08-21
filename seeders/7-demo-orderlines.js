'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderLines',
      [
        {
          quantity: 2,
          productId: 1,
          orderId: 1,
          unitPrice: 2000,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          quantity: 3,
          productId: 2,
          orderId: 1,
          unitPrice: 1000,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          quantity: 1,
          productId: 1,
          orderId: 2,
          unitPrice: 1800,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          quantity: 2,
          productId: 3,
          orderId: 2,
          unitPrice: 500,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          quantity: 2,
          productId: 3,
          orderId: 3,
          unitPrice: 500,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderLines', null, {});
  }
};
