const { setUser } = require("../services/services");

const user = require("../model/user")

async function signup(req, res) {
   try {
      const { email, password } = req.body

      const existedemail = await user.findOne({email : email})
      
      console.log(req.body);

      if (!email && !password) {
         return res.status(400).json({ err: "Form is empty !" })
      } else if (!email) {
         return res.status(400).json({ err: "email is empty !" })
      } else if (!password) {
         return res.status(400).json({ err: "Password is empty !" })
      } else if (password.length > 8) {
         return res.status(400).json({ err: "Password is over the 8 characters !" })
      } else if (password.length < 8) {
         return res.status(400).json({ err: "Password is under the 8 characters !" })
      }else if(existedemail){
         return res.status(400).json({err : "email is already exist !"})
      } else {
         const users = new user({ email: email, password: password })
         await users.save()

         return res.status(201).json({ msg: "Data registered successfully !", users : users })
      }
   } catch (error) {
      return res.status(500).json({ err: "Invalid data !" })
   }
}


async function signin(req, res) {
   try {
      const { email, password } = req.body;

      console.log(req.body);

      if (!email && !password) {
         return res.status(400).json({ err: "Form is empty !" })
      } else if (!email) {
         return res.status(400).json({ err: "email is empty !" })
      } else if (!password) {
         return res.status(400).json({ err: "Password is empty !" })
      } else if (password.length > 8) {
         return res.status(400).json({ err: "Password is over the 8 characters !" })
      } else if (password.length < 8) {
         return res.status(400).json({ err: "Password is under the 8 characters !" })
      } else {
         const users = await user.findOne({ email: email, password: password });

         const token = setUser(users);
         console.log(token);
         return res.status(200).json({ msg: "Login Successfully", user: users, token })
      }
   } catch (error) {
      return res.status(500).json({ err: "Invalid email and password !" })
   }
}

module.exports = { signup, signin }