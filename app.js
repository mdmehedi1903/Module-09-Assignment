const express=require('express');
const app=new express();
const router = require('./src/Routes/api');



//Middleware Import
const rateLimit = require('express-rate-limit')
const helmet =require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')


//Middleware Implementation
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())

//Request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: "Too many requests from this IP, please try again later."
})
app.use(limiter);


app.use("/api", router);


app.use('*',(req,res)=>{
    res.status(404).send("Content Not Found! 404 Error. Please visit home page!")
})

module.exports=app;