const express=require('express');
const router=express.Router();
require('../db/conn');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../model/userSchema');
//const authenticate=require('../middleware/authenticate');
const cookieParser =require("cookie-parser");
const session = require('express-session');
router.use(cookieParser())
router.use(session({ 
  secret: 'notagoodsecretthough' ,
  resave: false,
  saveUninitialized: true,
}))

const requireLogin = (req, res, next) => {
  console.log("Special",req.session.user_id);
  if (!req.session.user_id) {
      return res.json({ status: false })  
  }
  next();
}
router.get('/',(req,res)=>{
  res.send('Hello world from server router js');
})
router.post('/register', async (req,res)=>{
  const {name,email,password,address}=req.body;
  if(!name || !email ||  !password || !address){
    return res.status(422).json({error:"thik se bhad bhai"});
  }

try{
  const userExist=await User.findOne({email:email});
  if(userExist){
    return res.status(422).json({error:"email already exists"});
  }
  
  else{
    const user=new User({name,email,password,address});
    //console.log(user);
    const hash=await bcrypt.hash(password,12);
    //this.password=hash;
    console.log(hash);
    user.password=hash;
    req.session.user_id=user._id;
    await user.save();
  //  console.log("after save");
    //console.log(user);
    res.status(201).json({error:"Registration successful"});
  }
 

}
catch(err){
  console.log(err);
}

});

router.post('/signin', async (req,res)=>{
  

try{
  const {email,password}=req.body;
  console.log(email);
  if( !email || !password){
    console.log("empty");
    return res.status(422).json({error:"thik se bhad bhai"});
  }
  const userLogin=await User.findOne({email:email});
if(userLogin){
 // console.log(userLogin);
  //console.log(password);
  console.log(userLogin.password);
  const isMatch=await bcrypt.compare(password,userLogin.password);
  const token=await userLogin.getAuthToken();
  res.cookie("jwtoken",token,{
    expires:new Date(Date.now()+ (1000*7*24*60*60)),
    httpOnly:true
  }) 
  if(!isMatch){
    console.log("vul password");
    return res.status(422).json({error:"invalid credentials"});
  }
  else{
    console.log("thik password");
    req.session.user_id=userLogin._id;
    console.log(req.session.user_id);
    res.status(201).json({error:"Registration successful"});
  }
}
else{
  console.log('error');
  return res.status(422).json({error:"Vul credentials"});
}



  

}
catch(err){
  console.log(err);
}


});
router.get('/about',requireLogin,(req,res)=>{
  console.log('Hello my about');
  res.json({ status:true })  
})
router.get('/logout',(req,res)=>{
  console.log('Hello my logout');
  if(req.session.user_id){
    req.session.destroy();
    res.json({msg:"Logout successful"});
  }
  else{
    res.json({msg:"You must login first"});
  }
})
module.exports=router;