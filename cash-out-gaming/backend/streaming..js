const express = require(‘express’);
const app = express();
const { TwitchStream } = require(‘twitch-stream’);
const { ClientID, ClientSecret, RedirectURI } = require(‘./config’);

// Set up Twitch API credentials
const twitchClientID = ClientID;
const twitchClientSecret = ClientSecret;
const twitchRedirectURI = RedirectURI;

// Set up Twitch stream
const twitchStream = new TwitchStream({ clientID: twitchClientID, clientSecret: twitchClientSecret, redirectURI: twitchRedirectURI, scope: ‘channel_read’ });

// Set up streaming routes
app.get(‘/stream’, (req, res) => {
  // Authenticate with Twitch
  twitchStream.authenticate(req, res, (err, token) => {
    if (err) return res.status(401).send({ message: ‘Authentication failed’ });
    // Get stream metadata
    twitchStream.getStreamMetadata(token, (err, metadata) => {
      if (err) return res.status(404).send({ message: ‘Stream not found’ });
      // Stream video
      const video = twitchStream.getStreamVideo(metadata, (err, video) => {
        if (err) return res.status(500).send({ message: ‘Error streaming video’ });
        res.send(video);
      });
    });
  });
});

// Set up server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});