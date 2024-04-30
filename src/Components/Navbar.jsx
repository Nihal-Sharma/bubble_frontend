import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display :'flex'  }}>
       <div style={{margin :'20px'}}> <Link to={"/"} >Home</Link></div>
       <div style={{margin :'20px'}}> <Link to={"/Services"} >Services</Link></div>
       <div style={{margin :'20px'}}> <Link to={"/AboutUs"} >About Us</Link></div>
       <div style={{margin :'20px'}}>  <Link to={"/ContactUs"}>Contact Us</Link></div>
    </div>
  )
}

export default Navbar