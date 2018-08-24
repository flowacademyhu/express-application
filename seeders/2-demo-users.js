'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          username: 'admin',
          role: 'admin',
          firstName: 'admin',
          lastName: 'admin',
          encryptedPassword: bcrypt.hashSync('admin', bcrypt.genSaltSync(8), null),
          email: 'admin@admin.com',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01',
          city: 'admintown',
          country: 'administratoria',
          county: 'administratoria',
          door: '0',
          floor: '0',
          houseNumber: '0',
          street: '0000',
          zip: '0000'
        },
        {
          username: 'BurnTheTree',
          role: 'admin',
          firstName: 'Sylvannas',
          lastName: 'Windrunner',
          encryptedPassword: bcrypt.hashSync('asd123', bcrypt.genSaltSync(8), null),
          email: 'sylvannas@horde.com',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01',
          city: 'Orgrimmar',
          country: 'Kalimdor',
          county: 'Northern Durotar',
          door: '12',
          floor: '3',
          houseNumber: '5',
          street: 'Warroom',
          zip: '6527'
        },
        {
          username: 'ForHonor',
          role: 'user',
          firstName: 'Varok',
          lastName: 'Saurfang',
          encryptedPassword: bcrypt.hashSync('asd123', bcrypt.genSaltSync(8), null),
          email: 'varok@horde.com',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01',
          city: 'Stormwind',
          country: 'Eastern Kingdoms',
          county: 'Elwynn Forest',
          door: '3',
          floor: '21',
          houseNumber: '2/A',
          street: 'Citadel',
          zip: '7282'
        }, {
          username: 'Young Lion',
          role: 'admin',
          firstName: 'Anduin',
          lastName: 'Wrynn',
          encryptedPassword: bcrypt.hashSync('asd123', bcrypt.genSaltSync(8), null),
          email: 'Anduin@alliance.com',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01',
          city: 'Dalaran',
          country: 'Azeroth',
          county: 'Broken Isles',
          door: '2',
          floor: '12',
          houseNumber: '1',
          street: 'Violet Hold',
          zip: '9821'
        },
        {
          username: 'OldWolf',
          role: 'user',
          firstName: 'Genn',
          lastName: 'Greymane',
          encryptedPassword: bcrypt.hashSync('asd123', bcrypt.genSaltSync(8), null),
          email: 'genn@alliance.com',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01',
          city: 'Stormwind',
          country: 'Eastern Kingdoms',
          county: 'Elwynn Forest',
          door: '3',
          floor: '21',
          houseNumber: '2/A',
          street: 'Citadel',
          zip: '7282'
        },
        {
          username: 'BestMage',
          role: 'user',
          firstName: 'Archmage',
          lastName: 'Khadgar',
          encryptedPassword: bcrypt.hashSync('asd123', bcrypt.genSaltSync(8), null),
          email: 'khadgar@azeroth.com',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01',
          city: 'Dalaran',
          country: 'Azeroth',
          county: 'Broken Isles',
          door: '2',
          floor: '12',
          houseNumber: '1',
          street: 'Violet Hold',
          zip: '9821'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
