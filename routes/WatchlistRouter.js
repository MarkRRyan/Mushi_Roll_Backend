const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')
const middleware = require('../middleware')

<<<<<<< HEAD
Router.get('/allLists', controller.GetLists)
Router.post('/newList', controller.CreateWatchlist)
=======
Router.get('/', controller.GetWatchlist)
Router.put('/:title/:user', controller.UpdateWatchlist)
>>>>>>> 0ec2d44a03c9b6be37ee580d007bd1d56f7599c3


module.exports = Router
