const express = require("express");
//const mongoose = require("mongoose");
//const passport = require("passport");
var exphbs = require('express-handlebars');
const bodyparser = require("body-parser");
var methodOverride = require('method-override');
const path = require("path");
var routes = require("./controllers/controller.js");
var request = require("request");
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

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

app.post('/sendMessage', handleMessage)

function handleMessage(req, res) {
  var fnameVal = $("#contactForm").find('input[name="firstname"]').val();
  var lnameVal = $("#contactForm").find('input[name="lastname"]').val();
  var emailVal = $("#contactForm").find('input[name="email"]').val();
  var messageVal = $("#contactForm").find('input[name="messageBody"]').val();

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'unbelieverjude@gmail.com',
      pass: 'Fthefed22'
    }
  });
  let mailInfo = {
    from: fnameVal + " " + lnameVal,
    to: 'cjprestia@gmail.com',
    text: "email address: " + emailVal + "  message body: " + messageVal,
    html: '<p>' + emailVal + '</p><br><p>' + messageVal + '</p>',
  }

  transporter.sendMail(mailInfo, (error, info) => {
    if (error) {
      console.log('Error occurred');
      console.log(error.message);
      return process.exit(1);
    }

    console.log('Message sent successfully!');
  });

  console.log('Message sent: %s', info.messageId);
};



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));