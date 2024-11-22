const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Card = sequelize.define(
  'Card',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    damageType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    armorType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    damage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    armor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    superCard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: 'cards',
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

module.exports = {
  Card,
}