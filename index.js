const express= require("express");
const cors= require("cors")
require('./database/config')
const users = require('./database/product');
const app= express();
app.use(cors());
app.use(express.json());
const port =process.env.port||5000;
app.post("/register",async (req,res)=>{
    // res.send("hello server " + ` ${port}`)
    const data= new users(req.body);
    const result= await data.save();
    // const seen= await users.find();
    res.send(result);
console.log(result);
})
app.listen(port,()=>{
console.log(`server running on port ${port}`);
// console.log(req.body);
}) 