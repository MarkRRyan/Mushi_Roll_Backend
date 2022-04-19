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
  await Watchlist.bulkCreate(req.body.data, {
    fields:["userId", "animeId"]
  })
  
    res.send('Watchlist updated with new anime!')
  } catch (error) {
    console.log(error)
  }
}

const DeleteWatchlist = async (req, res) => {
  try {
    await Watchlist.destroy({ 
      where:{
      userId: req.params.user
      }
    })
    res.send('Watchlist deleted!')
  } catch (error) {
    console.log(error)
  }
}

const DeleteAnimeFromWatchlist = async (req, res) => {
  try {
    await Watchlist.destroy({
      where:{animeId: req.params.anime,
      userId:req.params.user}
    })
    res.send('Anime deleted from watchlist!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
	GetWatchlist,
  UpdateWatchlist,
  DeleteWatchlist,
  DeleteAnimeFromWatchlist
}
