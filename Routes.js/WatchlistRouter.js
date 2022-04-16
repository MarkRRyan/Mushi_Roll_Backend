const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')

Router.get('/allLists', controller.GetLists)


module.exports = Router 