//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const ejs = require('ejs');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
let todo = ' ';
let items = [];
app.get('/', function (req, res) {
  res.render('list', { kindofday: date.getDate(), newtodo: items });
});

app.post('/', function (req, res) {
  todo = req.body.newItem;
  items.push(todo);
  res.redirect('/');
});
app.get('/about', function (req, res) {
  res.render('about');
});
app.listen(3009, function () {
  console.log('Server is running in port 3009');
});
