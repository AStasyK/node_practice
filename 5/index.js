const express = require('express'),
    app  = express(),
    port = 5300;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log('App is listening on port ' + port));