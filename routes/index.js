var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/public/', function(req, res, next) {
  res.json({message: 'alive'});
});

module.exports = router;
