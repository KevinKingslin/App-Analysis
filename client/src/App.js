import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Analise from './components/Analise';
import Scan from './components/Scan';
import  Ptest from './components/Ptest';
import Logout from './components/Logout';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Nmap from './components/forms/Nmap';
import Metasploit from './components/forms/Metasploit';
import Openvas from './components/forms/Openvas';
import Spike from './components/forms/Spike';
import Mobsf from './components/forms/Mobsf';
import Apktools from './components/forms/Apktools';

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    
    <Route  path='/' element={<Home/>}/>
    
    <Route  path='/contact' element={<Contact/>}/>

    <Route  path='/explore' element={<About/>}/>

    <Route  path='/login' element={<Login/>}/>

    <Route  path='/signup' element={<Signup/>}/>

    <Route  path='/analise' element={<Analise/>}/>

    <Route  path='/scan' element={<Scan/>}/>

    <Route  path='/ptest' element={<Ptest/>}/>

    <Route  path='/logout' element={<Logout/>}/>

    {/* Service Routes */}
    <Route  path='/nmap' element={<Nmap/>}/>

    <Route  path='/metasploit' element={<Metasploit/>}/>

    <Route  path='/openvas' element={<Openvas/>}/>

    <Route  path='/spike' element={<Spike/>}/>

    <Route  path='/mobsf' element={<Mobsf/>}/>

    <Route  path='/apktools' element={<Apktools/>}/>
  </Routes>
  
    
    </BrowserRouter>
  )
}

export default App
