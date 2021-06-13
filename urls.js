/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
const express = require('express');
const shortid = require('shortid');
const { urls } = require('./url_data');

const router = express.Router();

router.get('/:shortUrlId', (req, res) => {
    const longUrl = urls[req.params.shortUrlId];
    if (longUrl) {
        res.redirect(`${longUrl}`);
    } else {
        res.status(404).send("Url doesn't exist");
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const longUrl = data.longUrl;
    const shortUrl = shortid.generate();

    urls[shortUrl] = longUrl;
    res.send({ shortUrl: `https://ur--l.herokuapp.com/urls/${shortUrl}` });
});
router.get('/', (req, res) => {
    res.send(urls);
});

module.exports = router;
