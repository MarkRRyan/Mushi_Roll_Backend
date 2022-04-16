const req = require('express/lib/request')
const res = require('express/lib/response')
const { User, Anime, Watchlist} = require('../models')

const GetLists = async (req, res) => {
  //http://localhost:3001/lists/allLists
    try {
      const list = await User.findAll({
        include: [
          {
            model: Anime, 
            as: 'watch_list',
            through: { attributes: [] }
          }
        ]
      })
      res.send(list)
    } catch (error) {
      throw(error)
    }
  }

  // const AddAnimeToList = async (req,res) => {
  //   try {
  //     const id = req.params.id
  //     const anime = await Anime.findByPk(id)
  //     const watchlist = await Watchlist.findOne()
  //       watchlist.anime = [...watchlist.anime, anime]
  //       await watchlist.save()
  //       res.send(watchlist)
      
  //   } catch (error) {
  //     throw (error)
  //   }
  // }





    

  module.exports = {
      GetLists,
      // AddAnimeToList
  }