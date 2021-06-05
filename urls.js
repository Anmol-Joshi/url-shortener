/* eslint-disable object-shorthand */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
const express = require('express');
const shortid = require('shortid');
const { urls } = require('./url_data');

const router = express.Router();

router.get('/:shortUrlId', (req, res) => {
    console.log(urls);
    // console.log(req.params.shortUrlId)
    const longUrl = urls[req.params.shortUrlId];
    if (longUrl) {
        res.send({
            shortUrl: `http://localhost:3000/urls/${req.params.shortUrlId}`,
            longUrl: longUrl,
        });
        // console.log(`longUrl is ${longUrl}`);
        // res.redirect(longUrl);
    } else {
        res.status(404).send("Url doesn't exist");
    }
    // console.log(req.params.shortUrlId)
    // res.send(urls[shortUrlId]);
});

router.post('/', (req,res) => {
    const data = req.body;
    const longUrl = data.longUrl;
    const shortUrl = shortid.generate();
    urls[shortUrl] = longUrl;
    res.send({ shortUrl: `http://localhost:3000/urls/${shortUrl}` });
});
router.get('/', (req, res) => {
    res.send(urls);
});

module.exports = router;
