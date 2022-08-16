import React from 'react';
import './login.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const loginUser= async (e)=>{
    e.preventDefault();
    
    const res=await fetch("http://localhost:8001/login",{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify({
        username,password
      })

    });
    const data= await res.json();
    console.log(data.status)
    if(data.status=='error'||!data){
      window.alert("Login Unsuccessful");
    }
    else{
      window.alert("Login Successful");
      localStorage.setItem('user_token', data.token);
      navigate('/');
      window.location.reload();
    }
  }

  return (
    
<div>



<body>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form method='POST'>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

            
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" value="log in" onClick={loginUser} >Sign
                  in</button>
              </div>
              <hr className="my-4"/>
              <div className="d-grid mb-2">
                <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-google me-2"></i> Sign in with Google
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</div>
   
    
  )
}

export default Login
