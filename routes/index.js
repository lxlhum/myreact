var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/ajax2', function(req, res, next) {
    res.json({success:1});
});

/* GET home page. */
router.get('/ajax3', function(req, res, next) {
    res.json({success:"ajax3"});
});

module.exports = router;
