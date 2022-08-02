import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Nmap = () => {
  const navigate=useNavigate();
  const [choice,setChoice]=useState(1);
  const [ip,setIP]=useState('');
  const [ports,setPorts]=useState('');
  const Submit= async (e)=>{
    e.preventDefault();
    const user_token = localStorage.getItem('user_token');
    const res=await fetch("http://localhost:8001/user/nmap",{
      method:"POST",
      headers:{
        'Authorization': `Bearer ${user_token}`,
        "content-type":"application/json",
      },
      body:JSON.stringify({
        choice, ip, ports
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
            <h5 className="card-title text-center mb-5 fw-light fs-5">Nmap</h5>
            <form method='POST'>
              <select className="form-select mb-3" id="floatingSelect" 
              aria-label="Floating label select example" 
              value={choice}
              onChange={(e)=>setChoice(e.target.value)}>
                <option selected value="1">Basic IP Scan</option>
                <option value="2">Specific Port Scan</option>
                <option value="3">Aggresive Scan</option>
              </select>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={ip}
                onChange={(e)=>setIP(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">IP</label>
              </div>
              
              { choice == 2 || choice == 3 ?
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingPassword" 
                  value={ports}
                  onChange={(e)=>setPorts(e.target.value)}
                  placeholder="Password"/>
                  <label htmlFor="floatingPassword">Ports</label>
                </div>
                :
                <div></div>
              }

              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" value="log in" onClick={Submit} >Submit
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

export default Nmap
