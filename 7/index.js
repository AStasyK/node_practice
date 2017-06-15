const express = require('express'),
    bodyParser = require('body-parser'),
    app  = express(),
    port = 5300;

let users = require('./users').data,
    nextId = require('./users').meta.next_id;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/all', (req, res) => {
    res.json(users);
});
app.get('/del/:id', (req, res) => {
    let delId = req.params.id;
    let delUser = users.filter((user) => { return user.id == delId });
    console.log(delUser);
    if(delUser[0]) {
        let pos = users.indexOf(delUser[0]);
        console.log(pos);
        users.splice(pos, 1);
        //res.redirect('/all');
        res.send("User " + delId + " was deleted");
    }
    else res.send("Wrong ID");
});
app.post('/', (req, res) => {
    let newUser = {
        id: nextId++,
        first_name: req.body.first_name,
        last_name: req.body.first_name,
        email: req.body.email,
        gender: req.body.gender == 0 ? "Male" : "Female"
    };
    users.push(newUser);
    res.redirect('/all');
});


app.listen(port, () => console.log('App is listening on port ' + port));