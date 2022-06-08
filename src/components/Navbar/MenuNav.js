import React from 'react'
import { Link } from 'react-router-dom';

function MenuNav(props) {
    
    
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
             <Link className="nav-link active border-0 h5" to="/menu">Menu</Link>
        </div>
        <div className="nav-item">
            <Link className="nav-link active border-0 h5" to="/cart">Cart({props.cartcount})</Link>
        </div>
        <div className="nav-item">
             <Link className="nav-link active border-0 h5" to="/profile">Profile</Link>
        </div> 
        
        <div className="nav-item">
             <Link className="nav-link active h5" to="/" >Logout</Link>
        </div>
    </div>
  </div>
         </nav>
          
      </div>
    </>
  )
}

export default MenuNav;