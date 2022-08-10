import React from 'react';
import './analise.css';

const Analise = () => {
  return (
    <div className='ans-outer'>
    <div className='ana'>
    <div>
      
<div className='card3'>
     <div className="row">
  <div className="col-sm-6">
    <div className="card text-white bg-info">
      <div className="card-body">
        <h5 className="card-title">Fuzzing</h5>
        <p className="card-text">It is a technique to send specially crafted input strings to crash a target program. The tools selected for this technique are: <br/>(i) SPIKE: it constructs fuzzed messages to crash C code running on a remote device <br/>(ii) WFUZZ: it can launch brute-force, injection attacks on Web applications.</p>
        
        <div>
    
<div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Fuzzing
  </button>
  <div className="dropdown-menu">
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
        <h5 className="card-title">Static Analysis</h5>
        <p className="card-text">The tools selected for the static analysis technique are:
<br/>(i) MoBSF: automated all in one mobile application (IOS, Android, Windows) security assessment framework capable of performing static analysis.

<br/>(ii) APK tool: tool for reverse engineering third party, closed, binary Android apps. It can decode resources to nearly original form and rebuild them after making some modifications.</p>
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