import React from 'react'
import MenuNav from '../Navbar/MenuNav';

function Profile(props) {
  return (
    <>
      <MenuNav cartcount={props.cartcount} />
      <div>My Account</div>
    </>
  )
}

export default Profile;