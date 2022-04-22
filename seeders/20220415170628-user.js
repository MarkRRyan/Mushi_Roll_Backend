'use strict';
const falso = require('@ngneat/falso')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [...Array(1)].map((_) => ({
      username: 'super_weeb',
      email: falso.randEmail(),
      passwordDigest: falso.randPassword(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('users', users)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}