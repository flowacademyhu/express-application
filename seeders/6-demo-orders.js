'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders',
      [
        {
          userId: 1,
          email: 'sylvannas@horde.com',
          billingAddressId: 1,
          deliveryAddressId: 1,
          status: 'ordered',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          userId: 2,
          email: 'varok@horde.com',
          billingAddressId: 1,
          deliveryAddressId: 3,
          status: 'ordered',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          userId: 3,
          email: 'Anduin@alliance.com',
          billingAddressId: 2,
          deliveryAddressId: 2,
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
