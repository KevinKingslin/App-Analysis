import React from 'react';
import people from '../assets/people.png'
import ai from '../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">SecIoT: An Integrated Framework for Comprehensive Security and Forensic Analysis of IoT-based Smart Home and Healthcare Devices and Wearables</h1>
      <p>The SecIoT framework supports multiple customized security analysis techniques and exploitation capabilities to facilitate holistic analysis of IoT devices and wearables. The analysis techniques supported by SecIoT are vulnerability scans, penetration testing, fuzz testing, and static analysis. The purpose of conducting such tests is to discover both reported as well as zero-day vulnerabilities prevalent in the IoT devices and determine which of these vulnerabilities are exploitable.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
