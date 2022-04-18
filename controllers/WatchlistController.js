const req = require('express/lib/request')
const res = require('express/lib/response')
const { User, Anime} = require('../models')

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
      console.log(error)
    }
  }


const CreateWatchlist = async (req, res) => {
  try {
    let anime = await Anime.create({
      title: req.body.title
    });
    let user = await User.findById(req.body.userId)
    await anime.addUser(user);

    let watchlist = await User.findById(req.body.userId, {
      include: [{
        model: Anime,
        as: 'anime',
        attributes: []
      }]
    })
    res.status(201).send(watchlist)
  } catch (error) {
    res.status(500).send(error)
  }
}


  module.exports = {
      GetLists,
      CreateWatchlist
  }