'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          username: 'testone',
          role: 'user',
          firstName: 'Test',
          lastName: 'One',
          password: 'asd123',
          email: 'demo1@demo.com',
          addressId: 1,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          username: 'testtwo',
          role: 'user',
          firstName: 'Test',
          lastName: 'Two',
          password: 'asd123',
          email: 'demo2@demo.com',
          addressId: 1,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          username: 'testthree',
          role: 'admin',
          firstName: 'Test',
          lastName: 'Three',
          password: 'asd123',
          email: 'demo3@demo.com',
          addressId: 2,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
