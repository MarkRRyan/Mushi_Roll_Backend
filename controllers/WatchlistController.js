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



// const CreateWatchlist = async (req, res) => {
//     try {
//         // let User = User.body
//         // let Anime = Anime.body 
//         let newWatchlist = await User.create({
//           include: [{  
//               model: Anime,
//               as: 'watch_list',
//               through: { attributes: [] }
//             }
//           ]
//         })
//         res.json(newWatchlist)
//       } catch (error) {
//       throw(error)
//     }
//   }



// const CreateWatchlist = async (req, res) => {
//   try {
//      let userId = req.params.userId
//      let animeId = req.params.animeId
//      let watchlist = {
//        userId, animeId,
//        ...req.body
//      }
//      let newWatchlist = await User.create(watchlist
//       , {
//       include:[
//         {
//           model: Anime, 
//           as: 'watch_list',
//           through: { attributes: [] }
//         }
//       ] }
//       )
//      res.json(newWatchlist)
//     } catch (error) {
//     throw(error)
//   }
// }


    

  module.exports = {
      GetLists,
      CreateWatchlist
  }