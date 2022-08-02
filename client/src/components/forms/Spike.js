import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Spike = () => {
  const navigate=useNavigate();
  const [host,setHost]=useState('');
  const [ports,setPorts]=useState('');
  const [skipvar,setSkipvar]=useState('');
  const [skipstring,setSkipstring]=useState('');
  const loginUser= async (e)=>{
    e.preventDefault();
    const user_token = localStorage.getItem('user_token');
    const res=await fetch("http://localhost:8001/user/spike",{
      method:"POST",
      headers:{
        'Authorization': `Bearer ${user_token}`,
        "content-type":"application/json",
      },
      body:JSON.stringify({
        host, ports, skipvar, skipstring
      })

    });
    const data= await res.json();
    
    
    // if(data.status===400||!data){
    //   window.alert(data.error);

    // }
    // else{
    //   window.alert(data.error);
      
    // }
    // if(data.status=="Ok"){
    //   localStorage.setItem('user_token', data.token);
    //   navigate('/');
    // }
    
  }

  return (
    
<div>



<body>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Spike</h5>
            <form method='POST'>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={host}
                onChange={(e)=>setHost(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Host IP</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={ports}
                onChange={(e)=>setPorts(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Port</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={skipvar}
                onChange={(e)=>setSkipvar(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Skip Variable</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={skipstring}
                onChange={(e)=>setSkipstring(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Skipstring</label>
              </div>
              
              {/* { choice === 2 ?
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingPassword" 
                  value={ports}
                  onChange={(e)=>setPorts(e.target.value)}
                  placeholder="Password"/>
                  <label htmlFor="floatingPassword">Ports</label>
                </div>
                :
                <div></div>
              } */}

              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" value="log in" onClick={loginUser} >Submit
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

export default Spike
