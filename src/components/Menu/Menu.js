import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MenuNav from '../Navbar/MenuNav'

function Menu(props) {
  const [items, setItems] = useState([])
    
  useEffect(()=>{
      loadItems()
  }, [])
    
  const loadItems = async() => {
    const result= await axios.get("http://localhost:8888/items")
    setItems(result.data)
  }

  return ( 
    <div>
      <MenuNav cartcount={props.cartcount }/>
      <h1 className="text-center">Menu</h1>
        <div className='d-flex flex-wrap justify-content-between'>
          {items.map((obj) => {
            return (
              <div className="card w-auto m-5 p-3 bg-white"  key={obj.id}>
                <img className="" src={obj.imgUrl} alt=""/>
                <div className=" bg-white">
                  <h4 className="mt-0 mb-0 h-5">{obj.title}</h4>
                  <h5 className="mt-4 mb-4">Rs:{obj.Rs}</h5>
                  <Link to="#" className="btn btn-primary" onClick={() => {props.addToCart(obj)}}>Add to Cart</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
  )
}
export default Menu;