const app=require('./app');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config({path:'./config.env'})

const PORT = process.env.RUNNING_PORT || 8080;
mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log("Database Connected")
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err)=>console.log(err))   



