var express = require('express');
const { registerUser, authenticateUser } = require('../service/registration.service');
var router = express.Router();

/* GET users listing. */
router.post('/user/register', function(req, res, next) {
  
  const { email, password } = req.body;
  if(!(email && password)){ 
    return res.sendStatus(400);
  }
  registerUser(email, password, res);

});

router.post('/user/auth', function(req, res, next) {
  
  const { email, password } = req.body;
  if(!(email && password)){ 
    return res.sendStatus(400);
  }
  authenticateUser(email, password, res);
  
});

module.exports = router;
