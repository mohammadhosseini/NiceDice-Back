var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    const result = {
      data : {
        message : 'this is a test'
      }
    };
    res.status(200).json(result);
  } catch (error) {
    
  }
  res.send('respond with a resource');
});

module.exports = router;
