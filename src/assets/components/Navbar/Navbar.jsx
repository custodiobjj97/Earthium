import React, { useState } from "react";
import {FaBars, FaTimes,FaLock} from 'react-icons/fa'
import { Header } from './styled'

const Navbar=()=>{
  const [open,setOpen]= useState(false)
  const handleOpen=()=>{
    setOpen(!open)
  }
  return (
     <Header>
       <a href="#" className="logo">
          <img src="./img/logo.png" alt="" />
       </a>
        <nav>
           <ul className={open ? 'list-menu open' : 'list-menu'}>
           <li><a className="active" href="#home">Home</a></li>
           <li><a href="#">Map</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">News</a></li>
           <li><a href="#">Flag</a></li>
           <li><a href="#">English</a></li>
            <li><a className="flag" href="#"><img src="./img/flag.png" alt="" />English</a></li>
            <li className="lock">
            <FaLock/> 
            <h3>
              Login &<br/>
              Resgistration
            </h3>
            
            </li>
           </ul>
        </nav>
        <button onClick={handleOpen} className="toggle">
          {open ? <FaTimes color="#fff"/> : <FaBars color="#fff"/>}
        </button>
     </Header>
  )
}

export default Navbar