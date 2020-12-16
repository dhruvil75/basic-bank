
const crypto = require('crypto');
const { SECRET } = require('../config');

const getCryptohash = ( password, salt ) => {
  const key = crypto.pbkdf2Sync(SECRET, salt, 10, 512, 'sha512');
  const hash = key.toString('hex')
  return {
    hash,
    salt
  }
}

const getSalt = () =>{
  return crypto
  .randomBytes(10)
  .toString('base64')
  .slice(0, 10)
}


const issueJWT = user => {
  const email = user.email;
  const expiresIn = '1d';
  
  const payload = {
    email,
    iat: Date.now()
  };
  const signedToken = jsonwebtoken.sign(payload, secret, { expiresIn: expiresIn });

  return {
    token: "JWT " + signedToken,
    expires: expiresIn
  }
}


module.exports = {
  getCryptohash,
  getSalt,
  issueJWT,
}