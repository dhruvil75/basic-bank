const User = require("../models/user.model");

const createAccount = (email, balance, accountType, res) => {
  User.update(
    {"email": email},
    { "$push": 
      {"accounts":{
          balance,
          accountType
        }
      }
    }
  ).then(result => {
    if(result.nModified === 1){
      res.sendStatus(200);
    }else{
      res.sendStatus(400)
    }
  }).catch(err => {
    res.status(500).send(err);
  })

}

const makeTransfer = (transferToId, transferFromId, amount, res) =>{

    User.find({
      $or:[
        {accounts: {$elemMatch: {_id:transferToId}}},
        {accounts: {$elemMatch: {_id:transferFromId}}},
      ]
    }).then(users => {
      if(users.length === 1){
        res.send("Cannot transfer in the same account");
      } else if(users.length === 2){
        users.forEach(user => {
          user.accounts.forEach(account=>{
            if(account._id+"" === transferFromId+""){
              console.log("here");
              if(account.balance < amount){
                res.send("Not enough Balance");
              }else{
                account.balance -= amount;
              }
            }
            if(account._id === transferToId){
              account.balance += amount;
            }
          })
          user.save();
        })
        res.sendStatus(200);
      }
    })
}

module.exports={
  createAccount,
  makeTransfer,
}