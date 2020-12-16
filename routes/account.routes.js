var express = require('express');
const { createAccount, makeTransfer } = require('../service/account.service');
var router = express.Router();


router.post('/', function(req, res, next) {
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

router.post('/transfer', function(req, res, next) {

  const { transferToId, transferFromId, amount } = req.body;

  if(!(transferToId && amount && transferFromId)){ 
    return res.sendStatus(400);
  }
  makeTransfer( transferToId, transferFromId, amount, res)
 
});


module.exports = router;
