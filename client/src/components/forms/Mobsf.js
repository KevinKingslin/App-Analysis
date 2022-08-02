import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Mobsf = () => {

  const navigate=useNavigate();
  const [file,setFile]=useState(null);
  
  const Submit= async (e)=>{
    e.preventDefault();
    const user_token = localStorage.getItem('user_token');

    const formData = new FormData();
    formData.append('apk', file);

    const res = await axios({
      method: "post",
      headers: { 
        'Authorization': `Bearer ${user_token}`,
        "content-type":"application/json", 
        },
      url: "http://localhost:8001/user/mobsf",
      data: formData,
    });

    const data= res.json();
    
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
            <h5 className="card-title text-center mb-5 fw-light fs-5">MobSF</h5>
            <form method='POST'>
                {/* <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" onChange={(e)=>getBase64(e)}/>
                    {file}
                </div> */}

                {/* <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" 
                    value={filename}
                    onChange={(e)=>setFilename(e.target.value)}
                    placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">File Path</label>
                </div>
              */}
              <div className='f-up'>
                <label className="custom-file-upload">
                  <input type="file" onChange={(e)=> setFile(e.target.files[0])}/>
                  Upload Apk
                </label>
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

export default Mobsf