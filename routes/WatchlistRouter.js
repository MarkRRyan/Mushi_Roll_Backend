const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')
const middleware = require('../middleware')

Router.get('/', controller.GetWatchlist)
Router.put('/:title/:user', controller.UpdateWatchlist)
Router.delete('/:user', controller.DeleteWatchlist)


module.exports = Router
