'use strict';
const falso = require('@ngneat/falso')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [...Array(50)].map((_) => ({
      username: falso.randUserName(),
      email: falso.randEmail(),
      password: falso.randPassword(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('users', users)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}


