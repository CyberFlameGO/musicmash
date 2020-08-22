const csvtojson = require('csvtojson/v2'),
      Song      = require('./models/song')

const seedDB = async () => {
  try {
    const songs = await csvtojson()
      .fromFile(`${__dirname}/songs.csv`)
    await Song.deleteMany({})

    for (const song of songs.slice(1)) {
      await Song.create({
        title: song.field2,
        author: song.field3
      })
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = seedDB
