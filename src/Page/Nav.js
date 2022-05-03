import React from 'react';
import { Link } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
const Nav = () => {
    return (
        <div>
            <ul class="nav">
  <li><Link to='/' >Home</Link></li>
  <li><Link to='/aboutus'>About Us</Link></li>
  <li><Link to='/feature' >Our Services</Link></li>  
  <li><Link to='/coffees'>Coffee</Link></li>
  <li className='icon'><MdOutlineLocalGroceryStore/></li>
</ul>
        </div>
    );
};


export default Nav;