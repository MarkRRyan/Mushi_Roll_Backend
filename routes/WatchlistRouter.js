const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')

Router.get('/allLists', controller.GetLists)
Router.post('/:userId/:animeId', controller.CreateWatchlist)


module.exports = Router 