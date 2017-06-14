const express = require('express'),
    app  = express(),
    port = 5300,
    filterByProp = require('./filterByProp');
let users = require('./users').data;

app.get('/', (req, res) => {
    res.send('To get users go to /users and set offset and limit props.');
});

app.get('/users', (req, res) => {
    let offset = Number(req.query.offset) - 1 || 0;
    let limit = Number(req.query.limit) || users.length;
    let end = offset + limit;
    //if (end > users.length) end = users.length;
    let selected = users.slice(offset, end);

    res.json(selected);
});

app.get('/users_filter', (req, res) => {
    let props = {
        first_name: req.query.fname  || null,
        last_name: req.query.lname  || null,
        email: req.query.email  || null,
        gender: req.query.gender || null
    };
    console.log(props);
    let filtered = users;
    for(prop in props) {
        if(props.hasOwnProperty(prop) && props[prop] !== null) filtered = filterByProp(filtered, prop, props[prop]);
    }
    res.json(filtered);
});

app.listen(port, () => console.log('App is listening on port ' + port));