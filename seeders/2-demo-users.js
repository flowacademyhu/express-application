'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          username: 'BurnTheTree',
          role: 'admin',
          firstName: 'Sylvannas',
          lastName: 'Windrunner',
          password: 'teldrassil012',
          email: 'sylvannas@horde.com',
          addressId: 1,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          username: 'ForHonor',
          role: 'user',
          firstName: 'Varok',
          lastName: 'Saurfang',
          password: 'killsylvannas',
          email: 'varok@horde.com',
          addressId: 1,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          username: 'Young Lion',
          role: 'admin',
          firstName: 'Anduin',
          lastName: 'Wrynn',
          password: 'ressthemall',
          email: 'Anduin@alliance.com',
          addressId: 2,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          username: 'OldWolf',
          role: 'user',
          firstName: 'Genn',
          lastName: 'Greymane',
          password: 'lovepetfood',
          email: 'genn@alliance.com',
          addressId: 2,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          username: 'BestMage',
          role: 'user',
          firstName: 'Archmage',
          lastName: 'Khadgar',
          password: 'teleportall',
          email: 'khadgar@azeroth.com',
          addressId: 3,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
