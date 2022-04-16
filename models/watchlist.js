'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Watchlist.belongsTo(models.User, {
        foreignKey:'watcherId',
        as: 'watcher',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      })
      Watchlist.hasMany(models.Anime, {
        foreignKey: 'watchlistId',
        as: 'anime'
      })
    }
  }
  Watchlist.init({
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    animeId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'animes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Watchlist',
    tableName: 'watchlists'
  });
  return Watchlist;
};

