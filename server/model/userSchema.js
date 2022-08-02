const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },

 
  password:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  tokens:[
    {
      token:{
        type:String,
        required:true
      }
    }
  ]
})

/*userSchema.pre('save', async function(next){
  console.log("Hi from pre");
  
 
  
  next();
})  */
userSchema.methods.getAuthToken=async function(){
  try{
let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({token:token});
    await this.save();
    return token;
  }
  catch(err){
console.log(err);
  }
}
const User=mongoose.model('USER',userSchema);
module.exports=User;