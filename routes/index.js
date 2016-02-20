var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sidebar', function(req, res, next) {
  res.render('sidebarTest', { title: 'sidebarTest' });
});

module.exports = router;
