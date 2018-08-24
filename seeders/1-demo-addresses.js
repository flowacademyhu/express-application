'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses',
      [
        {
          city: 'Orgrimmar',
          country: 'Kalimdor',
          county: 'Northern Durotar',
          createdAt: '2018.01.01',
          door: '12',
          floor: '3',
          houseNumber: '5',
          street: 'Warroom',
          zip: '6527',
          updatedAt: '2018.01.01'
        },
        {
          city: 'Stormwind',
          country: 'Eastern Kingdoms',
          county: 'Elwynn Forest',
          createdAt: '2018.01.01',
          door: '3',
          floor: '21',
          houseNumber: '2/A',
          street: 'Citadel',
          zip: '7282',
          updatedAt: '2018.01.01'
        },
        {
          city: 'Dalaran',
          country: 'Azeroth',
          county: 'Broken Isles',
          createdAt: '2018.01.01',
          door: '2',
          floor: '12',
          houseNumber: '1',
          street: 'Violet Hold',
          zip: '9821',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
