const SpotifyWebApi = require('spotify-web-api-node');
const twitter = require("twitter");
const config = require('config.json');
/*
----------------------
        SPOTIFY
----------------------
 */
// credentials are optional
const spotifyApi = new SpotifyWebApi({
    clientId: 'fcecfc72172e4cd267473117a17cbd4d',
    clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
    redirectUri: 'http://www.example.com/callback'
});
spotifyApi.setAccessToken('<your_access_token>');


/*
----------------------
        TWITTER
----------------------
 */

const client = new Twitter({
    consumer_key: config.twitterConsumer_key,
    consumer_secret: config.twitterConsumer_secret,
    access_token_key: config.twitterAccess_token_key,
    access_token_secret: config.twitterAccess_secret
});

const params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});