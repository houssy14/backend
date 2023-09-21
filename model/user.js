const mongoose=require("mongoose")

const userschema= new mongoose.Schema({
  username: { type:String, require:true},
  Email: { type:String,require:true,unique:true},
  Password:{ type:String,require:true},
})

module.exports=mongoose.model("user", userschema)