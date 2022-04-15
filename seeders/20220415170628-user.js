'use strict';
const faker = require('faker');


module.exports = {
  up:async (queryInterface, Sequelize) => {
    const users = [...Array(100).map((_) => ({
      userName: faker.inernet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))]
    await queryInterface.bulkInsert('users', users)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}