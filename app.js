const express = require('express');
const app = express();

const HOST = '0.0.0.0';
const PORT = 8080;

const songs = [
    'My Way', 'New York, New York', 'Fly Me to the Moon', 'Strangers in the Night',
    'That\'s Life', 'Come Fly with Me', 'The Way You Look Tonight', 'I\'ve Got You Under My Skin',
    'My Funny Valentine', 'It Was a Very Good Year', 'Luck Be a Lady', 'Summer Wind',
    'Witchcraft', 'All the Way', 'In the Wee Small Hours of the Morning',
    'One for My Baby (and One More for the Road)', 'Night and Day',
    'Something Stupid', 'The Lady Is a Tramp', 'You Make Me Feel So Young'
];

const birthDate = 'December 12, 1915';
const birthCity = 'Hoboken, New Jersey';
const wives = 'Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx';
const pictureUrl = 'https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg';

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    res.send(songs[randomIndex]);
});

app.get('/birth_date', (req, res) => {
    res.send(birthDate);
});

app.get('/birth_city', (req, res) => {
    res.send(birthCity);
});

app.get('/wives', (req, res) => {
    res.send(wives);
});

app.get('/picture', (req, res) => {
    res.redirect(pictureUrl);
});

app.get('/public', (req, res) => {
    res.send('Everybody can see this page');
});

app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.set('WWW-Authenticate', 'Basic realm="Restricted Area"');
        return res.status(401).send('Not authorized');
    }

    const base64Credentials = authHeader.slice('Basic '.length).trim();
    const decoded = Buffer.from(base64Credentials, 'base64').toString('utf8');
    const separatorIndex = decoded.indexOf(':');

    if (separatorIndex === -1) {
        res.set('WWW-Authenticate', 'Basic realm="Restricted Area"');
        return res.status(401).send('Not authorized');
    }

    const username = decoded.slice(0, separatorIndex);
    const password = decoded.slice(separatorIndex + 1);

    if (username === 'admin' && password === 'admin') {
        return res.send('Welcome, authenticated client');
    }

    res.set('WWW-Authenticate', 'Basic realm="Restricted Area"');
    return res.status(401).send('Not authorized');
});

app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`);
});