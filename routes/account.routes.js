var express = require('express');
const { createAccount } = require('../service/account.service');
var router = express.Router();


router.post('/account', function(req, res, next) {
  const { email } = req.headers;
  const { balance, accountType } = req.body;

  if(!(balance && accountType)){ 
    return res.sendStatus(400);
  }
  if(parseFloat(balance) > 50000 && accountType === "Basic Savings"){
    return res.sendStatus(400);
  }

  createAccount(email, balance, accountType, res)

});

module.exports = router;
