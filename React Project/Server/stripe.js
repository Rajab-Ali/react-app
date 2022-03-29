require('dotenv').config()
const stripAPI=require('stripe')(process.env.SECRET_KEY)

module.exports=stripAPI