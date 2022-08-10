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
      <h5 className="card-title">Analysis of IoT Device's Control App</h5>
      <p className="card-text">Two techniques employed for analysis of smartphone-based app (paired with IoT device to automate control) are:
<br/>(i)Fuzzing: It sends specially crafted input strings to crash a target program. 
<br/>(ii)Static analysis: It identifies risk vectors that have the potential to enable malicious update, but the analysis would be happening generally during build up/deployment time rather once deployed. These tools examine source code, executables, and even documentation, to find problem before they happen, without actually running the code.</p>
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
      <h5 className="card-title">Analysis of IoT Network</h5>
      <p className="card-text">The technique employed for security analysis of a IoT network is the Penetration testing. It simulates multi stage cyber-attacks against the networked IoT devices. </p>
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
