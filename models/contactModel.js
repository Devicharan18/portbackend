const mongoose=require('mongoose')

const Schema=mongoose.Schema
const contactSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String
    }

});

const contactModel=mongoose.model('contacts',contactSchema)
module.exports=contactModel