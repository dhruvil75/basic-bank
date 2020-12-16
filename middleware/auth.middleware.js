const User = require("../models/user.model");

module.exports = (req, res, next) =>{
  const jwt = require("jsonwebtoken");
  const { SECRET } = require("../config");

  let auth = req.headers.authorization;
  let token = auth.split(" ")[1];
  jwt.verify(token, SECRET, ((err, decoded) =>{
    const email = {decoded};
    User.findOne(email)
      .then(user=>{
        if(user)
          req.headers.email = email;
      })
  }));
  next();
}