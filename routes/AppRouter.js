const Router = require('express').Router()
const UserRouter = require('./UserRouter.js')
const AnimeRouter = require('./AnimeRouter.js')
const WatchlistRouter = require('./WatchlistRouter.js')
Router.use('/users', UserRouter)
Router.use('/anime', AnimeRouter)
Router.use('/watchlists',WatchlistRouter)
module.exports = Router