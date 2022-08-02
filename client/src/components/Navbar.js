import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const Navbar = () => {

  const user_token = localStorage.getItem('user_token');
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
  <Link className="navbar-brand" to="#">SECIOT</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-5 mb-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/explore">Explore</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      {(user_token == null) && (
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>)
      }   
      {(user_token == null) && (
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Register</Link>
        </li>)
      }
      {(user_token != null) &&(
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>)
      }
    </ul>
   
  </div>
</nav>
    </>
  )
}

export default Navbar
