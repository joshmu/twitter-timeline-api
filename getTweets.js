require('dotenv').config()

const Twitter = require('twitter-lite');

const auth = {
    subdomain: 'api', // "api" is the default (change for other subdomains)
    version: '1.1', // version "1.1" is the default (change for other subdomains)
    access_token_key: process.env.TWITTER_TOKEN, // from Twitter.
    access_token_secret: process.env.TWITTER_TOKEN_SECRET, // from Twitter.
    consumer_key: process.env.TWITTER_API_KEY, // from your User (oauth_token)
    consumer_secret: process.env.TWITTER_API_SECRET, // from your User (oauth_token_secret)
};

// console.log(auth)

const client = new Twitter(auth);

module.exports = async function getTweets() {
    // console.log('fetching tweets...')
    const tweets = await client.get('statuses/user_timeline', {
        screen_name: 'josh_mu_',
        exclude_replies: true,
        include_rts: false,
        count: process.env.TWEETS_LIMIT || 20,
        trim_user: true,
        tweet_mode: 'extended',
    });

    return tweets
}

