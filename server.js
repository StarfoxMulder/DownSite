const express = require("express");
//const mongoose = require("mongoose");
//const passport = require("passport");
var exphbs = require('express-handlebars');
const bodyparser = require("body-parser");
var methodOverride = require('method-override');
const path = require("path");
var routes = require("./controllers/controller.js");
var request = require("request");

const app = express();

app.use(methodOverride('_method'));
app.use(express.static("./public"));
app.use(routes);
app.use('/', routes);

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Bodyparser
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json());

// // Passport middleware
// app.use(passport.initialize());
// // Passport Config
// require("./config/passport.js")(passport);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));