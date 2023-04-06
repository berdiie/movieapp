const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://ashika:ashika00@cluster0.cshqx9x.mongodb.net/MOVIES?retryWrites=true&w=majority')
const Schema=mongoose.Schema
const RegSchema=new Schema({
     email:String,
     username:String,
     dob:String,
     password:String,
})
var Moviesdata=mongoose.model('regdata',RegSchema)//model creation
module.exports=Moviesdata