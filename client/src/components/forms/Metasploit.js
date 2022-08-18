import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Metasploit = () => {
  const navigate=useNavigate();
  const [ip,setIP]=useState('');
  const [ports,setPorts]=useState('');
  const [payload,setPayload]=useState('');
  const [name,setName]=useState('');
  const Submit= async (e)=>{
    e.preventDefault();
    console.log(payload)
    const user_token = localStorage.getItem('user_token');
    const res=await fetch("http://localhost:8001/user/metasploit1",{
      method:"POST",
      headers:{
        'Authorization': `Bearer ${user_token}`,
        "content-type":"application/json",
      },
      body:JSON.stringify({
        ip, ports, payload, name
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
            <h5 className="card-title text-center mb-5 fw-light fs-5">Metasploit</h5>
            <form method='POST'>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={ip}
                onChange={(e)=>setIP(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">IP</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={ports}
                onChange={(e)=>setPorts(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Ports</label>
              </div>

              {/* <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={spayload}
                onChange={(e)=>setSpayload(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Send Payload</label>
              </div> */}

              <select className="form-select mb-3" id="floatingSelect" 
              aria-label="Floating label select example" 
              value={payload}
              onChange={(e)=>setPayload(e.target.value)}>
                <option selected>Select Payload</option>
                <option value="payload/generic/debug_trap">Generic x86 Debug</option>
                <option value="generic/shell_bind_tcp">Generic Command Shell, Bind TCP</option>
                <option value="generic/shell_reverse_tcp">Generic Command Shell, Reverse TCP</option>
                <option value="generic/ssh/interact">Interact with Established SSH</option>
                <option value="generic/tight_loop">Generic x86 Tight</option>
                <option value="windows/adduser">Windows Execute net user</option>
                <option value="windows/dllinject/bind_hidden_ipknock_tcp">Reflective DLL Injection, Hidden Bind Ipknock TCP</option>
                <option value="windows/dllinject/bind_hidden_tcp">Reflective DLL Injection, Hidden Bind TCP</option>
                <option value="windows/dllinject/bind_ipv6_tcp">Reflective DLL Injection, Bind IPv6 TCP Stager (Windows x86)</option>
                <option value="windows/dllinject/bind_ipv6_tcp_uuid">Reflective DLL Injection, Bind IPv6 TCP Stager with UUID Support (Windows x86)</option>
                <option value="windows/dllinject/bind_named_pipe">Reflective DLL Injection, Windows x86 Bind Named Pipe</option>
                <option value="windows/dllinject/bind_nonx_tcp">Reflective DLL Injection, Bind TCP Stager (No NX or Win7)</option>
                <option value="windows/dllinject/reverse_ord_tcp">Reflective DLL Injection, Reverse Ordinal TCP Stager (No NX or Win7)</option>
                <option value="windows/dllinject/reverse_tcp">Reflective DLL Injection, Reverse TCP Stager</option>

                <option value="windows/dllinject/reverse_tcp_allports">Reflective DLL Injection, Reverse All-Port TCP Stager</option>
                <option value="windows/dllinject/reverse_tcp_dns">Reflective DLL Injection, Reverse TCP Stager (DNS)</option>
                <option value="windows/dllinject/reverse_tcp_uuid">Reflective DLL Injection, Reverse TCP Stager with UUID Support</option>
                <option value="windows/dns_txt_query_exec">DNS TXT Record Payload Download and Execution</option>
                <option value="windows/exec">Windows Execute Command</option>
                <option value="windows/format_all_drives">Windows Drive Formatter</option>
              </select>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="name@example.com"/>
                <label htmlFor="floatingInput">File name</label>
              </div>
              
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

export default Metasploit
