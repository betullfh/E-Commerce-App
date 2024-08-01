import React, { useState } from 'react'
import '../css/Header.css'
import { BsFillSearchHeartFill } from "react-icons/bs";
import { BsBasket2Fill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setdrawer } from '../redux/slices/basketslice';
import { MdAccountBox } from "react-icons/md";






function Header() {

  const [theme,settheme]=useState(true)
  const navigate=useNavigate()  
  const {products}=useSelector((store)=>store.basket)  
  const dispatch=useDispatch()
 
  
  const toDark =()=>
  {
    const root =document.getElementById("root")
    settheme(!theme)
    if(theme)
    {
      root.style.backgroundColor="darkgray"
      root.style.color="#fff"
    }
    else{
      root.style.backgroundColor="#fff"
      root.style.color="black"
    }
  }
   
  
  const toLight =()=>
  {
    const root =document.getElementById("root")
    
    if(theme)
    {
      root.style.backgroundColor="rgb(33, 32, 32)"
      root.style.color="#fff"
    }
    else{
      root.style.backgroundColor="#fff"
      root.style.color="black"
    }
    settheme(!theme)
  }


  return (
    <div className='header'>
        <div className='flex-row' style={{cursor:"pointer"}} onClick={()=>navigate("/")}>
            <img className='logo' src="src/images/logo.png" alt="Logo" /> 
            <h1 className='logo-text'>BULUT A.Ş.</h1>       
        </div>
        <div className='flex-row'>
            <input type="text" className='search-input' placeholder='Ne arıyorsunuz?'  />
            <div className="search-icon" ><BsFillSearchHeartFill /></div>
            {
              theme ? 
                  <div className='mood-light'>
                    <MdDarkMode onClick={toLight}/>
                  </div>
                  :
                  <div className='mood-dark'> 
                    <MdOutlineLightMode onClick={toDark}/>
                  </div>
            }
             <Badge onClick={()=>dispatch(setdrawer())} badgeContent={products.length} classes={{ badge: "customBadge" }}>
                 <BsBasket2Fill className="basket" />
             </Badge>
             <MdAccountBox  className='account' />

        </div>
       
    </div>
  )
}

export default Header