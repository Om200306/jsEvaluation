const {Router}= require("express");
const { eventModel } = require("../module/module");

   const eventRouter= new Router();


   eventRouter.post("/add",async (req,res)=>{

          let{title ,subject,startDate,endDate}= req.body;

      if(!title || !subject || !startDate || !endDate){
        return res.status(400).send("Fill all the fields");
      }
      
      try{
            await eventModel.create({title,subject,startDate,endDate});
            res.status(201).send("Event created successfully");
      }
      catch(err){
        res.status(400).send(err);
      }

})

eventRouter.get("/all",async(req , res)=>{
           
        try{

            let events= await eventModel.find();
            
              if(events){
                res.status(201).json({Events:events})
              }

              res.status(400).send("Events not found");

        }
        catch(err){
            res.status(400).send(err);
        }
})

eventRouter.delete("/delete/:id" , async(req , res)=>{

    let {id}= req.params;

    try{

        let delEvent= await eventModel.findByIdAndDelete(id);

        if(!delEvent){
            return res.status(400).send("Event not found");
        }

        res.status(201).send("Event deleted successfully")
    }
    catch(err){
        res.status(400).send(err);
    }

})

eventRouter.put("/update/:id",async(req , res)=>{

    let {id}= req.params;

    let{title ,subject,startDate,endDate}= req.body;

      if(!title || !subject || !startDate || !endDate){
        return res.status(400).send("Fill all the fields");
      }
         
    try{

        let updEvent= await eventModel.findByIdAndUpdate(
            id,
            { title, subject, startDate, endDate },
            { new: true, runValidators: true }
        );

        if (!updatedEvent) {
            return res.status(404).send("Event not found");
        }

        res.status(200).json({ message: "Event updated successfully", updatedEvent });

    }
    catch(err){
        res.status(400).send(err);
    }

})


module.exports=eventRouter;