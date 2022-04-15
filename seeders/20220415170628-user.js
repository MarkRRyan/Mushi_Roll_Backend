'use strict';
const faker = require('faker');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [...Array(50)].map((_) => ({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('users', users)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}

// const falso = require('@ngneat/falso')
// const users = [...Array(50)].map(() => ({
//   userName: falso.randFullName(),
  
// }))
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('users', users)
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('users')
//   }
// }
