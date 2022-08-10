import React from 'react';
import Feature from '../components/Feature'
import './whatGPT3.css';
import{ Link } from 'react-router-dom'

const WhatGPT3 = () => (
  <div className='wgpt3-outer'>
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is SECIOT?" text="The SecIoT framework supports multiple customized security analysis techniques and exploitation capabilities to facilitate holistic analysis of IoT devices and wearables. The analysis techniques supported by SecIoT are vulnerability scans, penetration testing, fuzz testing, and static analysis. The purpose of conducting such tests is to discover both reported as well as zero-day vulnerabilities prevalent in the IoT devices and determine which of these vulnerabilities are exploitable." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your  imagination</h1>
      <a href="explore"><p>Explore the Library</p></a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Analysis of IoT Device's Control App" text="Two techniques employed for analysis of smartphone-based app (paired with IoT device to automate control) are:
-Fuzzing: It sends specially crafted input strings to crash a target program. 
-Static analysis: It identifies risk vectors that have the potential to enable malicious update, but the analysis would be happening generally during build up/deployment time rather once deployed. These tools examine source code, executables, and even documentation, to find problem before they happen, without actually running the code." />
      <Feature title="Analysis of IoT Network" text="The technique employed for security analysis of a IoT network is the Penetration testing. It simulates multi stage cyber-attacks against the networked IoT devices." />
      <Feature title="Fuzzing" text="It is a technique to send specially crafted input strings to crash a target program. The tools selected for this technique are: (i) SPIKE: it constructs fuzzed messages to crash C code running on a remote device; (ii) WFUZZ: it can launch brute-force, injection attacks on Web applications." />
    </div>
   
   
   
    </div>
  </div>
);

export default WhatGPT3;
