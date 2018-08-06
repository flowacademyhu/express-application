const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:toortoor@localhost/webapp_database');

let models = {};

const user = sequelize.import('./user');

models[user.name] = user;

console.log(models);

module.exports = models;
