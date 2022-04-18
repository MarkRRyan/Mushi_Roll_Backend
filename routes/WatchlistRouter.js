const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')

Router.get('/allLists', controller.GetLists)
Router.post('/newList', controller.CreateWatchlist)


module.exports = Router 