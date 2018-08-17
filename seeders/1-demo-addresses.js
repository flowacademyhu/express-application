'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'test city 1',
          country: 'test country',
          county: 'test county',
          createdAt: '2018.01.01',
          door: '1',
          floor: '1',
          houseNumber: '1',
          street: 'teststreet',
          zip: '1234',
          updatedAt: '2018.01.01'
        },
        {
          city: 'test city 2',
          country: 'test country',
          county: 'test county',
          createdAt: '2018.01.01',
          door: '2',
          floor: '2',
          houseNumber: '2',
          street: 'teststreet',
          zip: '1234',
          updatedAt: '2018.01.01'
        }, {
          city: 'test city 3',
          country: 'test country',
          county: 'test county',
          createdAt: '2018.01.01',
          door: '3',
          floor: '3',
          houseNumber: '3',
          street: 'teststreet',
          zip: '1234',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
