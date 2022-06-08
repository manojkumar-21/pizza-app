import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

 function MainNav() {
     return (
    <>
      <div>
         <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src="https://i.ibb.co/KynkCsC/Logo.png" alt='logo'/>
                            
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
                 
        <div className="nav-item">
             <Link className="nav-link active h5" to="/signup">Sign up</Link>
        </div>
        <div className="nav-item">
             <Link className="nav-link active h5" to="/login">Login</Link>
         </div>
        
    </div>
  </div>
         </nav>
          
      </div>
    </>
  )
}
export default MainNav;