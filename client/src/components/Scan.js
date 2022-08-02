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
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">View previous scan report</a>
      </div>
    </div>
  </div>
  <div className='seperate'/>
  <div class="col-sm-6">
    <div class="card text-white  bg-success">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
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