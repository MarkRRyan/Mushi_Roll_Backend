'use strict';
const{User, Anime} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const users = await User.findAll({ raw:true })
    
    const animelist = await Anime.findAll({ raw: true })
    
    const watchlists = animelist.map((a) => ({
      userId: users[Math.floor(Math.random() * users.length)].id,
      animeId: animelist[Math.floor(Math.random() * animelist.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('watchlists', watchlists)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('watchlists')
  }
}