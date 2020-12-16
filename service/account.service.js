const User = require("../models/user.model");

const createAccount = (email, balance, accountType, res) => {
  User.update(
    {"email": email},
    { "$push": 
      {"accounts": 
        {
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

module.exports={
  createAccount,
}