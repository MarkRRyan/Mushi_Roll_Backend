const { TICK_CHAR } = require('sequelize/types/utils')
const { User, Anime, sequelize } = require('./models')
const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const userAndAnime = async () => {
  try {
    const data = await User.findAll({
      include: [
        {
          model: Anime,
          as: 'watching'
        }
      ]
    })
    stringify(data)
  } catch (error) {
    console.log(error)
  }
}

const getAnimeWatchers = async () => {
  try {
    const animes = await Anime.findAll({
      include: [
        {
          model: User,
          as: 'watcher',
          attributes: ['id', 'username']
        }
      ]
    })
    stringify(animes)
  } catch (error) {
    console.log(error)
  }
}

const getWatchlist = async () => {
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
    stringify(list)
  } catch (error) {
    console.log(error)
  }
}

const createWatchlist = async () => {
  try {
    const list = await User.Create
  } catch (error) {
    
  }
}

async function main() {
  try {
    // await userAndAnime()
    // await getAnimeWatchers()
    // await getWatchlist()
  } catch (error) {
    console.log(error)
  } finally {
    sequelize.close()
  }
}

main()
