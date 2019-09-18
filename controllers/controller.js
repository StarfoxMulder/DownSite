var express = require('express');
var router = express.Router();
var request = require("request");
var path = require('path');

///// Route to Landing Page \\\\\
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/about', function (req, res) {
  res.render('about');
});

router.get('/portfolio1', function (req, res) {
  res.render('portfolio1');
});

router.get('/portfolio2', function (req, res) {
  res.render('portfolio2');
});

router.get('/process', function (req, res) {
  res.render('process');
});

router.get('/articles', function (req, res) {
  res.render('articles');
});

module.exports = router;