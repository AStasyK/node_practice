const express = require('express'),
    app  = express(),
    port = 5300;

app.get('/', (req, res) => {
    let info = "Welcome!\n" + "Use /cube path to throw a cube and get a number. \n" +
        "Go to /time to know the current date and time \n" +
        "Go to /echo and set the parameter 'say' to any phrase.";
    res.send(info);
});


app.get('/cube', (req, res) => {
    let cube = Math.floor(Math.random() * 6) + 1;
    res.send(String(cube));
});

app.get('/time', (req, res) => {
    let date = new Date().toLocaleString();
    res.send(String(date));
});

app.get('/echo', (req, res) => {
    let phrase = req.query.say;
    res.send(phrase);
});


app.listen(port, () => console.log('App is listening on port ' + port));