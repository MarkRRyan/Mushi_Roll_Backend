const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')
const middleware = require('../middleware')

Router.get('/', controller.GetWatchlist)
Router.put('/:title/:user', controller.UpdateWatchlist)


module.exports = Router
