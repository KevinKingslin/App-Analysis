import React from 'react';
import './ptest.css';

const Ptest = () => {
  return (
    <div className='outer'>
      <div className='c1'>
      <div class="card text-center text-white bg-dark">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
   
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div className='ddm'>
        
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Port Scanning
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="nmap">NMap</a>
           
          </div>
        </div>
                </div>
  </div>
</div>
      </div>
      <div className='c2'>
      <div class="card text-center text-white bg-dark">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
   
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div className='ddm'>
        
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Vulneribility Assesment
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="openvas">OpenVas</a>
           
          </div>
        </div>
                </div>
  </div>
</div>
      </div>
      <div className='c3'>  
      <div class="card text-center text-white bg-dark">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
   
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div className='ddm'>
        
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Exploitation
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="metasploit">Metasploit</a>
           
          </div>
        </div>
                </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Ptest