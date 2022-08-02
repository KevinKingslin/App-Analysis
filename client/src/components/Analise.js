import React from 'react';
import './analise.css';

const Analise = () => {
  return (
    <div className='ans-outer'>
    <div className='ana'>
      <div className='f-up'>
      <label className="custom-file-upload">
    <input type="file"/>
    Upload Apk
   </label>
      </div>
     <div>
      
<div className='card3'>
     <div className="row">
  <div className="col-sm-6">
    <div className="card text-white bg-info">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
        <div>
    
<div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Fuzzing
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">WFuzz</a>
    <a className="dropdown-item" href="spike">Spike</a>
  
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
  <div className='seperate'/>
  <div className="col-sm-6">
    <div className="card text-white  bg-success">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <div >
        
<div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Static Analysis
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="mobsf">MobSF</a>
    <a className="dropdown-item" href="apktools">APKTools</a>
   
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</div>
     </div>
     </div> 
    </div>
    </div>
  )
}

export default Analise