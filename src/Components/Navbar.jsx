import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate()

 
  
    const handleButtonClick = () => {
      setShowAlert(true);
    };
  
    const logout = () => {
      setShowAlert(false);
      localStorage.setItem("LOGGEDIN" ,'false')
      navigate('/')
    };

    const cancel = () =>{
      setShowAlert(false);
    }

  return (
    <div className="navbar">
      <div style={{ margin: "20px"  }}>
        {" "}
        <Link to={"/"}>Home</Link>
      </div>
      <div style={{ margin: "20px" }}>
        {" "}
        <Link to={"/Services"}>Services</Link>
      </div>
      <div style={{ margin: "20px" }}>
        {" "}
        <Link to={"/AboutUs"}>About Us</Link>
      </div>
      <div style={{ margin: "20px" }}>
        {" "}
        <Link to={"/ContactUs"}>Contact Us</Link>
      </div>
      <div
        style={{
          margin: "20px",
          backgroundColor: "grey",
          color: "white",
          paddingLeft: "9px",
          paddingRight: "9px",
          paddingTop: "5px",
          paddingBottom: "5px",
          borderRadius: "10px",
          width :'60px',
          textAlign :'center'
         
        }}
        onClick={logout}
      >
        Log Out
      </div>
      <div>
      
      {showAlert && (
        <div className="alert-box">
          <p>This is an alert box.</p>
          <button onClick={logout}>Log Out</button>
          <button onClick={cancel}>Cancel</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;
