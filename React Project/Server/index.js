const express=require('express')
const cors=require('cors')
const createCheckoutSession = require('./api/checkout')
const path = require('path')
require('dotenv').config()

const app=express()
const PORT=process.env.PORT || 8080;

app.use(express.json())
app.use(cors({origin:true}))

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('react-ecommerce/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'react-ecommerce','build','index.html'))
    })
}
app.post('/create-checkout-session',createCheckoutSession)
app.listen(PORT,()=>console.log(`Server listening at port: ${PORT}`))