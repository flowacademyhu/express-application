'use strict';
const csv = require('csv-parser');
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let categories = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(`${__dirname}/03-demo-category.csv`)
        .pipe(csv())
        .on('data', (data) => {
          categories.push({
            id: data.id,
            parentId: data.parentId,
            name: data.name,
            createdAt: '2018.01.01',
            updatedAt: '2018.01.01'
          });
        }).on('error', (err) => {
          console.log(err);
          reject(err);
        }).on('end', () => {
          resolve(queryInterface.bulkInsert('Categories', categories).then);
        });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
