import React from 'react';
import './analise.css';
import { Link } from 'react-router-dom';
const Scan = () => {
  return (
    <div className='ana'>
<div className='card4'>
     <div class="row">
  <div class="col-sm-6">
    <div class="card text-white bg-info">
      <div class="card-body">
        <h5 class="card-title">View Previous Scan Report</h5>
        <p class="card-text">Previous scan operations done on networked devices can be accessed for reference.</p>
        <a href="#" class="btn btn-primary">View previous scan report</a>
      </div>
    </div>
  </div>
  <div className='seperate'/>
  <div class="col-sm-6">
    <div class="card text-white  bg-success">
      <div class="card-body">
        <h5 class="card-title">Penetration Testing</h5>
        <p class="card-text">It is a simulated multi-stage cyber attack on networked devices to check for exploitable vulnerabilities. It consists of three main stages: 
        <br/>(i) Port scanning, <br/>(ii) Vulnerability assessment, <br/>(iii) Exploitation</p>
        <Link to="/ptest" class="btn btn-primary">Penetretion Testing</Link>
      </div>
    </div>
  </div>
</div>
     </div>
    </div>
  )
}

export default Scan