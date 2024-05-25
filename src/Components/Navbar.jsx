import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
const Navbar = () => {
  const username = localStorage.getItem("USERNAME")
  const navigate = useNavigate()
  // const [navstyle , setNavstyle] = useState(window.innerWidth)

  const [isOpen, setIsopen] = useState(false);
  const toggleDrawer = () => {
    setIsopen(!isOpen);
  };

  const navstyle = window.innerWidth;
  const handleLogin = () => {
    
    navigate('/login')
    
  };

  const logOut = () =>{
    alert('Logged Out')
    navigate('/')
    localStorage.removeItem("USERNAME")
    localStorage.removeItem("LOGGEDIN")
  }
  if (navstyle >= 700) {
    return (
      <div className="main-navbar">
        <div className="logo-navbar"></div>
        <div className="routes-navbar">
          <NavLink className="links" to="/">
            Home
          </NavLink>
          <NavLink className="links" to="/services">
            Services
          </NavLink>
          <NavLink className="links" to="/offers">
            Offers
          </NavLink>
          <NavLink className="links" to="/ContactUs">
            Contact
          </NavLink>
          <NavLink className="links" to="/complain">
            Complain
          </NavLink>
        </div>
        <div className="login-signup-navbar">
         { username && <div className="login-but-navbar" onClick={logOut}>
            Logout
          </div>}
          { ! username && <div className="login-but-navbar" onClick={handleLogin}>
            Login
          </div>}
          <div className="signup-but-navbar" onClick={()=>{navigate("/signup")}} >Signup</div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="main-navbar2">
          <div onClick={toggleDrawer} className="show-drawer">
            <IconContext.Provider
              value={{
                color: "#E6484B",
                className: "global-class-name",
                size: "30px",
              }}
            >
              <div>
                <GiHamburgerMenu />
              </div>
            </IconContext.Provider>
          </div>
          <div className="logo-navbar"></div>

          {/* <div className="routes-navbar">
             <NavLink className= 'links' to='/'>Home</NavLink>
             <NavLink className= 'links' to='/services' >Services</NavLink>
             <NavLink className= 'links' to = '/offers' >Offers</NavLink>
             <NavLink className= 'links' to = '/ContactUs'>Contact</NavLink>
             <NavLink className= 'links' to = '/complain' >Complain</NavLink>
           </div> */}
          <div className="login-signup-navbar">
           { ! username && <div className="login-but-navbar" onClick={handleLogin}>
              Login
            </div>}
            
           {  username &&  <div className="login-but-navbar" onClick={logOut}>
              Logout
            </div>}
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
        >
          <div className="routes-navbar-burger">
            <div className="logo-navbar"></div>
            <NavLink className="links-burger" to="/">
              Home
            </NavLink>
            <NavLink className="links-burger" to="/services">
              Services
            </NavLink>
            <NavLink className="links-burger" to="/offers">
              Offers
            </NavLink>
            <NavLink className="links-burger" to="/ContactUs">
              Contact
            </NavLink>
            <NavLink className="links-burger" to="/complain">
              Complain
            </NavLink>
          </div>
        </Drawer>
      </div>
    );
  }
};

export default Navbar;
