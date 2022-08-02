const jwt=require('jsonwebtoken');
const User=require('../model/userSchema');

const Authenticate= async (req,res,next)=>{
  console.log("ok bro 1");
  try{
      const token=req.cookies.jwtoken;
      const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
      const rootUser=User.findOne({_id:verifyToken._id,"tokens.token":token});
      //console.log("XXXXXXXXXXXXXXXXXX",rootUser);
      if(!rootUser) {throw new Error('User not found')};
      
      req.token=token;
      req.rootUser=rootUser;
      req.userID=rootUser._id;

      next();
  }
  catch(err){
      res.status(401).send('Unauthorized accesss ');
      console.log(err);
  }  
  console.log("ok bro2");
  
}
module.exports=Authenticate;