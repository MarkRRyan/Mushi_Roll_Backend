const Router = require('express').Router()
const WatchlistRouter = require('./WatchlistRouter')
// const UserRouter = require('./UserRouter')

Router.use('/lists', WatchlistRouter)
// Router.use('/users', UserRouter)

module.exports = Router