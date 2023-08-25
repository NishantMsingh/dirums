import React, { useContext } from 'react';
import "./Header.css";
import {TbMenu} from "react-icons/tb";
import CartContext from '../../Context/Cart-context';
const Header = () => {
  const ctx=useContext(CartContext);
  const MenuHandler=()=>{
    ctx.menuToggle();
  }
  return (
     <div className='container-fluid header'>
      <header className='container d-flex flex-row justify-content-start align-items-center pt-3'>
        <span className='Hamburger' onClick={MenuHandler}> <TbMenu/> </span>
      <div  className="brand"> 
    
      <h1 className='fs-1'> DIRUMS  </h1>
       <sub className='com'> .com</sub>
        </div>

    <div className='ms-5'>
      <span className='webdevelopment-text'>Website developement tracker </span>
    </div>
     
    </header>
      </div>
  )
}

export default Header
