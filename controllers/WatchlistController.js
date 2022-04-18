const res = require('express/lib/response')
const { User, Anime, Watchlist } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


const GetWatchlist = async (req, res) => {
  try {
    const list = await User.findAll({
      include: [
        {
          model: Anime,
          as: 'watch_list' 
        }
      ]
    })
    res.send(list)
  } catch (error) {
    console.log(error)
  }
}

const UpdateWatchlist = async (req, res) => {
  try {
  await Watchlist.create({
      userId: req.params.user,
      animeId: req.params.title
    })
    res.send('Watchlist updated with new anime!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
	GetWatchlist,
  UpdateWatchlist
}