const express = require('express')
const app = express()
const port = process.env.PORT

const twitter = require('twitter-lite')
const getTweets = require('./getTweets.js')

app.get('/', async (req, res) => {

    try {
        const tweets = await getTweets()
        res.json(tweets)
    } catch (err) {
        res.send(err.message)
    }

})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
