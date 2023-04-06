const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    try{
        
        const token=req.headers.authorization
          
        const decodedToken=jwt.verify(token,"Ashika");
        console.log(decodedToken);
        req.userData={id:decodedToken.id,role:decodedToken.rol}
        
        next() 
    }catch(error){
        res.status(401).json({message:"please login"})
    }
}