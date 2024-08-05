const express = require('express')
const router = express.Router()

const {product,getUserEmail} = require("../controller/products")
const {authorization} = require("../middleware/auth")

router.get('/products',authorization, product);

router.get("/me",authorization,getUserEmail);

module.exports = router;