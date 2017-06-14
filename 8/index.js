const express = require('express'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    app  = express(),
    port = 5300;

let users = require('./users').data,
    nextId = require('./users').meta.next_id;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json(users);
});
// edit record
app.get('/upd/:id', (req, res) => {
    let id = req.params.id;
    let user = users.filter((user) => { return user.id == id });
    if(user[0]) {
        res.render('upd', {user: user[0]});
    }
    else res.send("Wrong ID");
});
app.post('/:id', (req, res) => {
    let updUser = {
        id: req.params.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender == 0 ? "Male" : "Female"
    };
    let user = users.filter((user) => { return user.id == updUser.id });
    if(user[0]) {
        let pos = users.indexOf(user[0]);
        users.splice(pos, 1, updUser);
        console.log("User " + updUser.id + " was updated");
        res.redirect('/');
    }
    else res.send("Wrong ID");
});
// delete record
app.get('/del/:id', (req, res) => {
    let delId = req.params.id;
    let delUser = users.filter((user) => { return user.id == delId });
    console.log(delUser);
    if(delUser[0]) {
        let pos = users.indexOf(delUser[0]);
        console.log(pos);
        users.splice(pos, 1);
        //res.redirect('/all');
        console.log("User " + delId + " was deleted");
        res.redirect('/');
    }
    else res.send("Wrong ID");
});
// create new record
app.get('/new', (req, res) => {
    res.render('new');
});
app.post('/', (req, res) => {
    let newUser = {
        id: nextId++,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender == 0 ? "Male" : "Female"
    };
    users.push(newUser);
    console.log("New user was created: " + newUser.first_name + " " + newUser.last_name);
    res.redirect('/');
});


app.listen(port, () => console.log('App is listening on port ' + port));