const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
  title: String,
  author: String,
  rating: { type: Number, default: 1000 }
})
const Song = mongoose.model('Song', songSchema)

module.exports = Song
