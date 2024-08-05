
const products = require("../model/products");

const jwt = require("jsonwebtoken");

const secret = "Rohan@123504";

async function product(req,res) {
  try {
    const getAllProducts = await products.find()

    return res.status(200).json({msg : "Products found !",products : getAllProducts})
  } catch (error) {
    return res.status(500).json({err : "Data not found !"})
  }
}

async function getUserEmail(req,res){
    jwt.verify(req.token,secret,(err,data)=>{
         if(err) throw err;

         if(!data.email){
            return res.status(400).json({msg : "Invalid email"}); 
         }else{
            return res.status(200).json({msg : "Email found !",data : data.email})
         }
    })
}

module.exports = {product,getUserEmail}