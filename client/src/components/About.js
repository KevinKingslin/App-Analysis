import React from 'react';
import { useEffect } from 'react';
import './about.css';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const About = () => {
const navigate=useNavigate();
  const callAboutPage= async ()=>{
    const user_token = localStorage.getItem('user_token');

    try{
      // const res=await fetch("/about",{
      //   method:"GET",
      //   headers:{
      //     Accept:"application/json",
      //     "Content-Type":"application/json",
          
      //   },
      //   credentials:"include"
        
  
      // });
      // const data= await res.json();
      // console.log(res.status);
      // console.log(data.status);
      // const ok=data.status;
      if(user_token == null){
        navigate('/login');
       window.alert("Please login first");
       
        throw new Error("Not found");
      }
      else{
        alert("Welcome bro");
        
      }
    
    }
    catch(err){
      console.log(err);
      navigate('/login');
    } 
   // window.alert("OK");
    //navigate('/login');
  }
  useEffect(()=>{
      callAboutPage();
  },[]);   
  return (
<div className='outer-about'>
<div className='card1'>
  <div className="card text-center card text-white bg-dark mb-3">
    <div className="card-header">
      Featured
    </div>
    <div className="card-body">
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <p>To analyze the app, click below</p>
      <Link to="/analise" className="btn btn-primary btn-lg">Analyze App</Link>
    </div>
    <div className="card-footer text-muted">
      2 days ago
    </div>
  </div>
</div>
<div className='card2'>
  <div className="card text-center card text-white bg-dark mb-3">
    <div className="card-header">
      Featured
    </div>
    <div className="card-body">
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <Link to="/scan" className="btn btn-primary btn-lg">Scan IOT</Link>
    </div>
    <div className="card-footer text-muted">
      2 days ago
    </div>
  </div>
</div>

</div>
  
  )
}

export default About
