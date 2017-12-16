const express = require("express");

const app = express();

// Pug Setup
app.set('views', './views');
app.set('view engine', 'pug');

// Stylesheet Setup
app.use("/css", express.static(__dirname + "/css"));

app.get('/', (req, res) => {
    res.render('index', {copr: "Copr. 2017 © N. Prochnau. All Rights Reserved."});
});

app.listen(3000, () => console.log('Server started on Port 3000'));