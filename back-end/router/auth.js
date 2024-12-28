
  const {Router}= require("express");
const { hackModel } = require("../module/module");

  const authRouter= new Router();


  authRouter.get("/all",async (req , res)=>{

        try{
              
            let user= await hackModel.find();

            if(user){
               return res.status(201).json({List:user});
            }


            res.status(400).send("User not found");

        }
        catch(err){
            res.status(400).send(err);
        }

  })

authRouter.post("/signup", async (req , res)=>{
      const {name , email , password}=req.body;
        
      if(!name || !email || !password){
       return res.status(400).send("Fill all the fields");
      }

         try{
            
            let user= await hackModel.findOne({email});

            if(user){
                res.status(400).res.send("User already exists");
            }

         await hackModel.create({name,email,password})
           res.status(201).send("Account created successfully")
         }

      catch(err){
                res.status(400).send(err);
      }     
  })


  authRouter.post("/login" , async (req, res)=>{
       
         const {email , password}=req.body;

         if(!email || !password){
           return res.status(400).send("Fill all the fields");
         }

         try{
            
                let user= await hackModel.findOne({email});
        
                 if(user){
                    res.status(201).send("Login successfully")
                 }

                 res.status(400).send("User not found");
                

         }
         catch(err){
                  
            res.status(401).send(err);
         }

  })


authRouter.


  module.exports=authRouter;