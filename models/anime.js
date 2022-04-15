'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anime.belongsTo(models.User, {
        as: 'watcher',
        foreignKey: 'watcherId'
      })
      Anime.belongsToMany(models.User, {
        through: models.Watchlist,
        as: 'anime',
        foreignKey: 'animeId'
      })
    }
  }
  Anime.init({
    title: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    episodes: DataTypes.INTEGER,
    seasons: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    watcherId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
  }, {
    sequelize,
    modelName: 'Anime',
    tableName: 'animes'
  });
  return Anime;
};