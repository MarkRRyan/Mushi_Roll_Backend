const { User, Anime} = require('../models')

const GetLists = async (req, res) => {
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



const createWatchlist = async () => {
    try {
      
    } catch (error) {
      
      console.log(error)
    }
  }

  module.exports = {
      GetLists,
    //   CreateWatchlist
  }