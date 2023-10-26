var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res, next) {
    const f = 1 + Math.floor(Math.random() * 31);

    
const avi1 = Math.atan(f);
const avi2 = Math.exp(f);
 
const response =`Math.atan applied to ${f} is ${avi1}\n` +
                `Math.exp applied to ${f} is ${avi2}\n` ;
 
res.send(response);
 
   
});
 
 
module.exports = router;
 