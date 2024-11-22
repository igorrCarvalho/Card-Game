const sequelize = require('sequelize');

const database = new sequelize('card-game-db', 'card', '1234', {
    host: 'localhost',
    dialect: 'mssql'
});

module.exports = {
  database,
};
