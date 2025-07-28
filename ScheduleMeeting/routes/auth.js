const express = require('express');
const router = express.Router();
const { oauth2Client, SCOPES } = require('../google-auth');

router.get('/auth', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  res.redirect(url);
});


router.get('/oauth2callback', async (req, res) => {
  const { code } = req.query;

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  console.log('Tokens:', tokens);

  res.send(' Auth successful! Copy your refresh_token from console & add it to .env.');
});

module.exports = router;
