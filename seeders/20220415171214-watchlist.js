'use strict';
const{User, Anime} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll({ raw:true })
    const anime = await Anime.findAll({ raw:true })
    const watchlists = anime.map((a) => ({
      userId: users[Math.floor(Math.random() * users.length)].id,
      animeId: a.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('watchlists', watchlists)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('watchlists')
  }
}