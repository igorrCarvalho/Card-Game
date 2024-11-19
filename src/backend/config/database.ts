import { Sequelize } from "sequelize"



const sequelize = new Sequelize('card-game-db', 'card', '1234', {
    host: 'localhost',
    dialect: 'mssql'
  });

export default sequelize;