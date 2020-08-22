const { Router } = require('express'),
      Song       = require('../models/song')

const songsRouter = Router()

songsRouter.get('/poll', async (req, res, next) => {
  try {
    const song1 = await Song.aggregate([
      {
        $sample: { size: 1 }
      }
    ])
    const song2 = await Song.aggregate([
      {
        $match: {
          _id: { $ne: song1._id }
        }
      },
      {
        $sample: { size: 1 }
      }
    ])

    return res
      .status(200)
      .json({ songs: song1.concat(song2) })
  } catch (err) {
    console.error(err)
    return res.sendStatus(500)
  }
})

module.exports = songsRouter
