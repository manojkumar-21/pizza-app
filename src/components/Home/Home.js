import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

 function Home() {
     return (
         <>
             <div className="card-container d-flex justify-content-center m-5">
                 <div className="card bg-whitesmoke">
                <div className="card-body">
                    <h1 className="card-title">Pizza Delivery</h1>
                         <p className="card-text">Welcom to Pizza Delivery serives.Thisis the place when you
                             may choose thr most delicious pizza you like wide variety of potion!</p>
                         <hr></hr>
                         <p>We're performing delivery free of charge in case if your order is higher than 20$</p>
                         <div className="signin-btn">
                               <Link to="/login" className="btn btn-primary">Sign In and Order</Link>
                        </div>
                </div>
                </div>
             </div>
         </>
     
  )
}
export default Home;