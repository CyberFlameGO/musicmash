const express  = require('express'),
      mongoose = require('mongoose'),
      dotenv   = require('dotenv'),
      cors     = require('cors'),
      app      = express()

const songsRouter = require('./routers/songs')
const seedDB = require('./seed')

dotenv.config()
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => {
  // seedDB()
  app.listen(process.env.PORT)
})
.catch(console.error)

app.use(cors())
app.use(express.json())

app.use('/songs', songsRouter)
