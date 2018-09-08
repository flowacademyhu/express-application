'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments',
      [
        {
          userId: 1,
          productId: 1,
          comment: 'Really good spade',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          userId: 2,
          productId: 1,
          comment: 'Best spade ever',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          userId: 3,
          productId: 1,
          comment: 'Shitty Spade, do not order!',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          userId: 1,
          productId: 2,
          comment: 'Good Spade',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          userId: 1,
          productId: 3,
          comment: 'Really delicious!',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          userId: 2,
          productId: 3,
          comment: 'Sour AF!',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
