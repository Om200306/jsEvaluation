const {Schema ,model}=require("mongoose");


let userSchema=new Schema({
    name:{
        type:String ,
        required:true
    }
    ,
    email:{
        type:String ,
        required:true ,
        unique:true
    } ,
    password :{
        type:String ,
        required:true
    } ,
    date: {
        type: Date,
        default: Date.now
    }
})


let eventSchema= new Schema({
    title:{
        type:String,
        required:true 
    } ,
    subject:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    }
    ,
    endDate:{
        type:Date,
        required:true
    }
})


const eventModel= new model("event",eventSchema);
const hackModel= new model("hack",userSchema);

module.exports={hackModel,eventModel}


