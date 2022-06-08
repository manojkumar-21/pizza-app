import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    console.log(itemsPrice)
    const totalPrice = itemsPrice;
    

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("mycartItems")));
    }, []);

//      const deletecartItems = async id => { 
//         await axios.delete(`http://localhost:3001/cartItems/${id}`)

//   }

  return (
      <div className='container mt-4'>
          <h1>Shopping Cart</h1>
          <hr></hr>
          {
            cartItems.map((cartItems) => {
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
                    <button className=" btn btn-primary m-5">Delete</button>
                {/* <button className=" btn btn-danger" onClick={() => deletecartItems(cartItems.id)}>Delete</button> */}
                </td>
                 </tr>
                )
            
            })
          }
            
           {/* <div className='total-products'>
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
             </div> */}
    </div>
  )
}

export default Cart