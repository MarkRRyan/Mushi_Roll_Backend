const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')

Router.get('/allLists', controller.GetLists)
// Router.put('/:id', controller.AddAnimeToList)


module.exports = Router 