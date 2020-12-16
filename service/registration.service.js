const User = require("../models/user.model");
const { getSalt, getCryptohash } = require("../util/security.util")


const  registerUser = (email, password, res) =>{

  const salt = getSalt();
  const auth = getCryptohash(password, salt);

  const user = new User({
      email,
      auth,
    })
    user.save()
      .then(res=>{
        res.sendStatus(200);
      }).catch(err=>{
        res.send("User Already Registered")
      })

}

authenticateUser = (email, password, res) =>{
  User.findOne({email:email})
    .then(user=>{
      if(!user) return res.sendStatus(401);
      const { salt, hash } = user.auth;
      const { hash:hashDb } =  getCryptohash(password, salt);
      if(hashDb === hash){
        res.sendStatus(200);
      }
      else{
        res.sendStatus(401);
      }
    })
}

module.exports = {
  registerUser,
  authenticateUser,
}