'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories',
      [
        {
          parentId: 0,
          name: 'Garden tools',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          parentId: 0,
          name: 'Saplings',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          parentId: 1,
          name: 'Hoes',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          parentId: 1,
          name: 'Spades',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          parentId: 4,
          name: 'Big Spades',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          parentId: 4,
          name: 'Short Spades',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          parentId: 2,
          name: 'Oak saplings',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          parentId: 2,
          name: 'Cherry saplings',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
