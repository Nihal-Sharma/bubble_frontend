import React, { useState } from "react";
import { useStore } from "../Store/Store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UsernameLogin = () => {
    const navigate = useNavigate()
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const api = useStore((state)=> state.apiendpoint)
    const Login = () =>{
  
        // localStorage.setItem("LOGGEDIN" ,"true")
        // navigate("/chooseservice")
      
      console.log(api.apiendpoint)
      axios.post(`${api}/login` , {username , password}).then((result)=>{
        // localStorage.setItem("TOKEN" , res.data)
        if(result.data.username == null){
          alert("Login Denied")
        }
        else{
          alert("Login successfull")
          localStorage.setItem("LOGGEDIN" ,"true")
          localStorage.setItem("USERNAME" ,result.data.username )
          localStorage.setItem("TYPE" , result.data.type )
          navigate("/")

        }
      })
      }


    const NewAcc = () =>{
      navigate('/SignUp')
    }

  return (
   <div className="main-login">
    <div className="login-box">
    <div className="logo-navbar1"></div>
    <div className="input-login">
      <div className="login-input-div"><input placeholder="Username" className="input-log" onChange={(e)=>{setUsername(e.target.value)}} /></div>
      <div  className="login-input-div"><input placeholder="Password" type="password" className="input-log" onChange={(e)=>{setPassword(e.target.value)}} /></div>
    <div className="login-button" onClick={Login} >Login</div>
    <div className="login-button1" onClick={()=>{navigate('/signup')}} >New here? Signup</div>
    </div>
    </div>
   </div>
  );
};

export default UsernameLogin;
