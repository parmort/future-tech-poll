const express = require("express");

const app = express();

// Pug Setup
app.set('views', './views');
app.set('view engine', 'pug');

// Stylesheet Setup
app.use("/css", express.static(__dirname + "/css"));

// Vars
const copr = "Copr. 2017 © N. Prochnau. All Rights Reserved."

app.get('/', (req, res) => {
    res.render('index', {copr: copr});
});

app.post('/', (req, res) => {
    res.send('You have come to the right place POSTING to /');
});

app.listen(process.env.PORT || 3000, () => console.log('Server started on Port ' + (process.env.PORT || 3000)));