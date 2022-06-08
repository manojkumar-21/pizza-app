import React from 'react'
import { Link } from 'react-router-dom'
import MenuNav from '../Navbar/MenuNav'

function Checkout(props) {
  return (
    <>
      <MenuNav cartcount={props.cartcount} />
          <h2>Order has been placed successfully!!</h2>
          <div class="alert alert-success" role="alert">
            You will receive notification by email with your order details
          </div>
          <Link to="/menu"><button className=" btn btn-primary w-auto m-5">Goto and order some more</button></Link>
      </>
  )
}

export default Checkout