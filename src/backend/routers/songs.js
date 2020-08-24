const { Router } = require('express'),
      Song       = require('../models/song')

const songsRouter = Router()

songsRouter.get('/poll', async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $match: {
          _id: {
            $not: {
              $in: req.query.exclude ? req.query.exclude.split(',') : []
            }
          }
        }
      },
      {
        $sample: {
          size: 2
        }
      },
      {
        $project: {
          rating: 0,
          __v: 0
        }
      }
    ])

    return res
      .status(200)
      .json(songs)
  } catch (err) {
    return next(err)
  }
})

songsRouter.post('/vote', async (req, res, next) => {
  try {
    const ids = Object.keys(req.body)

    const song1 = await Song.findOne({ _id: ids[0] })
    const song2 = await Song.findOne({ _id: ids[1] })

    const expectedResult1 = 1 / (
      1 + Math.pow(
        10, (song2.rating - song1.rating) / 400
      )
    )
    const expectedResult2 = 1 / (
      1 + Math.pow(
        10, (song1.rating - song2.rating) / 400
      )
    )

    song1.rating = Math.floor(
      song1.rating + 20 * (req.body[ids[0]] - expectedResult1)
    )
    song2.rating = Math.floor(
      song2.rating + 20 * (req.body[ids[1]] - expectedResult2)
    )

    await song1.save()
    await song2.save()

    return res.sendStatus(200)
  } catch (err) {
    return next(err)
  }
})

module.exports = songsRouter
