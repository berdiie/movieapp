const express=require('express')
const bodyparser=require('body-parser')
const app=express()
const cors=require('cors')
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(bodyparser.json())

const userrouter=require('./src/routes/userRoutes')

app.use('/user',userrouter)

 app.listen(3001,()=>{
    console.log('http://localhost:3001');
 })
