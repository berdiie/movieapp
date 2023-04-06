const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://ashika:ashika00@cluster0.cshqx9x.mongodb.net/MOVIES?retryWrites=true&w=majority')
const Schema=mongoose.Schema
const LoginSchema=new Schema({
     email:String,
     username:String,
     password:String,
})
var Moviesdata=mongoose.model('logindata',LoginSchema)//model creation
module.exports=Moviesdata