'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn('users', 'password', 'passwordDigest')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn('users', 'passwordDigest', 'password' )
  }
};
