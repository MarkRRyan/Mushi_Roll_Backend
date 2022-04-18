const { Anime } = require('../models')

const GetAllAnime = async (req, res) => {
  try {
    const animes = await Anime.findAll()
    res.send(animes)
  } catch (error) {
    throw error
  }
}

module.exports = {
	GetAllAnime
}