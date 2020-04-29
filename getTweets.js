const Twitter = require('twitter-lite');

const auth = {
  subdomain: 'api', // "api" is the default (change for other subdomains)
  version: '1.1', // version "1.1" is the default (change for other subdomains)
  access_token_key: process.env.TWITTER_TOKEN, // from Twitter.
  access_token_secret: process.env.TWITTER_TOKEN_SECRET, // from Twitter.
    // TODO: HOW DO WE GET THE CONSUMER KEY?
  consumer_key: process.env.TWITTER_USER_KEY, // from your User (oauth_token)
  consumer_secret: process.env.TWITTER_USER_SECRET, // from your User (oauth_token_secret)
};

const client = new Twitter(auth);

module.exports = async function getTweets() {
    console.log('getting tweets...')
  const tweets = await client.get('statuses/user_timeline', {
    screen_name: 'josh_mu_',
    exclude_replies: true,
    include_rts: false,
    count: 5,
    trim_user: true,
    tweet_mode: 'extended',
  });

  return tweets
}

