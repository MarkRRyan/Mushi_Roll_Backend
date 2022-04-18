const { User, Anime, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetOneUser = async (req, res) => {
  try {
    const users = await User.findByPk(req.params.me, {
      include: [
        {
          model: Anime,
          as: 'watch_list' 
        }
      ]
    })

    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
	GetUsers,
  GetOneUser
}