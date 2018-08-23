'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products',
      [
        {
          name: 'Silver Spade',
          description: 'Brand new dwarfmade silver spade',
          price: 2000,
          onStock: 10,
          picture: 'sofa.jpg',
          categoryId: 5,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Bronze Spade',
          description: 'Beautiful bronze spade from Stormwind',
          price: 1000,
          onStock: 10,
          picture: null,
          categoryId: 5,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          name: 'Azeroth Cherry Sapling',
          description: 'Delicious cherry',
          price: 500,
          onStock: 10,
          picture: null,
          categoryId: 8,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
