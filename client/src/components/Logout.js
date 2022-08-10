import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate=useNavigate();
  const callLogoutPage= async ()=>{
    try{

      localStorage.removeItem('user_token');
      const user_token = localStorage.getItem('user_token');
      navigate('/');
      window.location.reload();
      alert('Logout Successful')

      // const res=await fetch("/logout",{
      //   method:"GET",
      //   headers:{
      //     Accept:"application/json",
      //     "Content-Type":"application/json",
          
      //   },
      //   credentials:"include"
        
        
      // });
      // const data= await res.json();
      // console.log("DATA",data);
      // if(data.msg=="Logout successful"){
      //   navigate('/');
      //   alert(data.msg);
      //   //alert("Etai bhai");
      // }
      // else{
      //   navigate('/login');
      //   alert(data.msg);
      // }
    }
    catch(err){
      console.log(err);
      navigate('/login');
    } 
   // window.alert("OK");
    //navigate('/login');
  }
  useEffect(()=>{
      callLogoutPage();
  },[]); 
  return (
    <>
    
    </>
  )
}

export default Logout