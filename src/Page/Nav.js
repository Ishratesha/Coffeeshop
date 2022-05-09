import {React} from 'react';
import { Link } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import logoc from '../assets/logo-white.png'
const Nav = () => {
    
     
    return (

        
        <div className="topnav" id="myTopnav">
            
            
             <img src={logoc}/>
        <ul className="nav-item">
  <li><Link to='/home' >Home</Link></li>
  <li><Link to='/aboutus'>About Us</Link></li>
  <li><Link to='/feature' >Our Services</Link></li>  
  <li><Link to='/coffess'>Coffee</Link></li>
  
  
  <li  className='icon'><MdOutlineLocalGroceryStore/></li>
</ul>

        </div>
        
    );
};


export default Nav;