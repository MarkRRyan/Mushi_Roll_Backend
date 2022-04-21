require('dotenv').config()
module.exports = {
  development: {
    database: "Mushi_roll_development",
    dialect: 'postgres'
  },
  test: {
    database: "Mushi_roll_test",
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}