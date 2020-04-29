require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

const twitter = require('twitter-lite')
const getTweets = require('./getTweets.js')

const cors = require('cors')

let whitelist = ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://joshmu.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/', cors(corsOptions), async (req, res) => {

    try {
        const tweets = await getTweets()
        res.json(tweets)
    } catch (err) {
        res.send(err.message)
    }

})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
