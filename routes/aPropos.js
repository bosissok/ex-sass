var express = require('express');
const fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('aPropos', { title: 'Page contact', message: 'Hello there!'});
  
  });
  
  module.exports = router;