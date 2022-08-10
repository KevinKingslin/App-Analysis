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
    <h5 class="card-title">Port Scanning</h5>
    <p class="card-text">It is for for device discovery and port scanning. An open-source tool, called Nmap, has been used in this framework.</p>
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
    <h5 class="card-title">Vulnerability Assessment</h5>
    <p class="card-text">The purpose of this security test is to list out the vulnerabilities existing in applications and/or platform that are running on networked devices. OpenVAS (an open-source tool) has been used for vulnerability scanning and management.</p>
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
    <h5 class="card-title">Exploitation</h5>
    <p class="card-text">This security test shows if one or more networked devices can be exploited by leveraging existing vulnerabilities. Open-source tool Metasploit has been used for exploiting the vulnerabilities in a variety of applications, operating systems and platforms.</p>
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