const express=require('express')
const userrouter = express.Router()
const login=require('../models/login')
const regist=require('../models/reg')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

var mongoose=require('mongoose');

userrouter.post('/register',(req,res)=>{
    console.log(req.body);

    bcrypt.hash(req.body.password, 8, function(err, hash) {
        if(err){
            return res.status(404).json({
                error:true,
                success:false,
                message:'hash error'
            })
        }
        const login_data={
            username:req.body.username,
            password:hash,
            role:'user'
        }  
        login.findOne({username:login_data.username})
        .then((data)=>{
            if(data){
            return res.status(200).json({
                message:'username exists',
                error:true
               
            })
        }
        const login_save=login(login_data)
        login_save.save()
        .then((result)=>{
            const register={
             login_id:result._id,
             username:req.body.username,
             email:req.body.email,
             dob:req.body.dob,
             address:req.body.address,
             number:req.body.number
            }
            regist.findOne({number:register.number})
            .then((dmobile)=>{
                if(!dmobile){
                    console.log(register);
                    const save_regist=regist(register)
                    save_regist.save()
                    .then((regsave)=>{
                        return res.status(200).json({
                            message:regsave,
                            error:false,
                            success:true
                    })   
                    }).catch((err)=>{
                        return res.status(404).json({
                            message:"registration error",
                            error:true,
                        })
                    })
                }
          else {     
            login.deleteOne({username:req.body.username})
                .then((msg)=>{
                    return res.start(200).json({
                        message:"number exists",
                        error:false,
                        success:true
                    })
                }).catch((err)=>{
                    return res.status(404).json({
                        message:"login error",
                        error:true
                    })
                })
            }
            })
        })
        })
    })  
})
userrouter.post('/userlogin',(req,res)=>{
    console.log(req.body.username);
    login.findOne({username:req.body.username})
    .then((username)=>{
        // console.log(username);
        if(username==undefined){
            return res.status(200).json({
                message:"invalid",
                
            })
        }
        else{
            bcrypt.compare(req.body.password,username.password,function(err,resp){
                
                console.log(username.password);
                if(resp===false){
                    return res.status(200).json({
                        message:'password is incorrect'
                    })
                }
                else{
                    const token=jwt.sign(
                        {
                            id:username._id,rol:username.role
                        },
                        "Ashika",
                      
                    )
                    return res.status(200).json({
                        token:token,
                        id:username._id,
                        rol:username.role,
                        status:true
                    })
                }
            })
        }
    })
})

userrouter.get('/getdb/:id',(req,res)=>{
    const id=req.params.id;
    const checked=mongoose.Types.ObjectId(id)
    regist.find({login_id:checked})
    .then((data)=>{
        return res.status(200).json({
            message:data
        })   
    })
})

userrouter.get('/view',(req,res)=>{
    login.find()
    .then((see)=>{
        regist.find()
    .then((reg)=>{
        return res.status(200).json({
            log_data:see,
            reg_data:reg
        })
    })
    })
    .catch((error)=>{
        return res.status(200).json({
         message:error   
        })
    })
})


module.exports= userrouter