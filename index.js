const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();
const { pg } = require('pg');
const routes = require('./routes');

app.set('view engine', 'ejs');
// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.accueil);
app.get('/a_propos', routes.a_propos);
app.get('/contact', routes.contact);
app.get('/portfolio', routes.portfolio);
app.get('/services', routes.services);
app.get('/temoignages', routes.temoignages);

app.get('*', (req, res) =>{
    res.render('404page');
})

var server = app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})