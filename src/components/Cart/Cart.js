import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MenuNav from '../Navbar/MenuNav';

function Cart(props) {
    const [totalPrice, setTotalPrice] = useState(0);   

    useEffect(() => {
        const itemsPrice = props.cartItems.reduce((a, c) => a + c.qty * c.Rs, 0);
        setTotalPrice(itemsPrice);
    }, [props.cartItems]);

    return (
      <>
        <MenuNav cartcount={props.cartcount} />
        <div className='container mt-4'>
          <h1>Shopping Cart</h1>
          <hr></hr>
          {
            props.cartItems.map((cartItems) => {
              return (
                <tr key={cartItems.id}>
                  <th scope="row">{}</th>
                	<td><img width={200} className="p-4" src={cartItems.imgUrl} alt="" /></td>
               		<hr></hr>
                	<td className='h3 p-4'>{cartItems.title}</td>
									<hr></hr>
									<td className='h3 p-4'>{cartItems.Rs}</td>
									<td>
                    <div>
                    	<p>{cartItems.qty} X {cartItems.Rs} = {cartItems.qty * cartItems.Rs}</p>    
                    </div>
                	</td>
									<td>
											<button className=" btn btn-primary m-5" onClick={() => props.deletecartItems(cartItems)}>Delete</button>
									</td>
                </tr>
              )
            })
          }
          <div className='total-products'>
                    <hr></hr>
                    <div className="row">
											<div className="col-2">
												<strong>Total Price</strong>
											</div>
											<div className="col-1 text-right">
												<strong>{totalPrice}</strong>
											</div>
                    </div>
                <hr />
             </div>
            <Link to="/checkout"><button className=" btn btn-primary m-5">CHECKOUT</button></Link>
   			</div>
      </>
  )
}

export default Cart