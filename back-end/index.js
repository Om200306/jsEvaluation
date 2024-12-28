const express= require("express");
const connection = require("./db/connection");
const authRouter = require("./router/auth");
const cors= require("cors");
const eventRouter = require("./router/event");

const app=express();


app.use(cors());

app.use(express.json());

     
app.get("/hi",(req ,res)=>{
    res.send("Hi");
})


    app.use("/event",eventRouter)
     app.use("/hack",authRouter)

  
     app.listen(3000, async ()=>{
        try{

            await connection;
            console.log("server is running");
        }
        catch(err){
            console.log(err);
        }
     })

