const jwt = require("jsonwebtoken");

const secret = "Rohan@123504";

function setUser(user){
   const payload = {
       _id : user._id,
       email : user.email,
       password : user.password
   }

  return jwt.sign(payload,secret)
}

module.exports = {setUser}