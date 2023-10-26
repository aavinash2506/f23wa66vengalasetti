var express = require('express');
var router = express.Router();
 
/* To have intersting fact */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Vengalasetti Avinash' });
});
 
module.exports = router;