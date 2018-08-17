'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories',
      [
        {
          parentId: 0,
          name: 'testcategory',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          parentId: 1,
          name: 'testcategory2',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          parentId: 1,
          name: 'testcategory3',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          parentId: 2,
          name: 'testcategory4',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
