import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

 function Login() {
    const onSubmitHandler =  (e) => {
      e.preventDefault() 

      
  }
  return (
      
      <>
          <div>
              <h1 className='container mt-5'>Login</h1>
          </div>
          <div className='container m-5'>
               <form onSubmit={(e)=>onSubmitHandler(e)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail" required />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                <input type="password" name="phoneNo" className="form-control" id="exampleInputPhoneNo" required />
             </div>
            
             <Link to="/menu"><button type="submit" className="btn btn-primary w-auto mt-3">Login</button></Link>
            
           </form>
          </div>
         
         
      </>
  )
}
export default Login;