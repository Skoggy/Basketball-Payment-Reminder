'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Team }) {
      // define association here
      this.belongsTo(Team, { foreignKey: 'teamId', as: 'team' })
    }
  };
  Player.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Player myst have a name" },
        notEmpty: { msg: "Player must have a name" }
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountOwed: {
      type: DataTypes.INTEGER,

    }
  },
    {
      sequelize,
      tableName: 'players',
      modelName: 'Player',
    });
  return Player;
};