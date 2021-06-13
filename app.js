// eslint-disable-next-line import/no-unresolved
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const urls = require('./urls');
const { urls: urlData } = require('./url_data');

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.static('public', { redirect: false }));

app.get('/u/:shortUrlId', (req, res) => {
    const longUrl = urlData[req.params.shortUrlId];
    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(404).send("Url doesn't exist");
    }
});

app.use('/urls', urls);

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening at port: ${port}`);
});
