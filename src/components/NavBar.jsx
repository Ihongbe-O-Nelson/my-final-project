import React from 'react'
import { RiShoppingBasketLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <div>
        <div className='flex'>
            <p>About us</p>
            <p>Delivery</p>
            <p>Locations</p>
            <p>Contacts</p>
        </div>
        <div>
            <RiShoppingBasketLine />
        </div>
    </div>
  )
}

export default NavBar