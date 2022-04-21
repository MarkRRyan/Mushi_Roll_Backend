const Router = require('express').Router()
const controller = require('../controllers/AnimeController')

Router.get('/', controller.GetAllAnime)


module.exports = Router
