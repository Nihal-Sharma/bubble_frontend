import React, { useState } from "react";
import { useStore } from "../Store/Store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate()
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [confpassword , setconfPassword] = useState('')
    const [email , setEmail] = useState('')
    const api  = useStore((state)=> state.apiendpoint)

    const signUp = () =>{
        axios.post(`${api}/signup` , {username , password , email}).then((result)=>{
            navigate('/login')
        })
    }

    
  return (
    <div className="main-login">
    <div className="login-box">
    <div className="logo-navbar1"></div>
    <div className="input-login">
      <div className="login-input-div"><input placeholder="Username" className="input-log" onChange={(e)=>{setUsername(e.target.value)}} /></div>
      <div  className="login-input-div"><input placeholder="Password" type="password" className="input-log" onChange={(e)=>{setPassword(e.target.value)}} /></div>
      <div className="login-input-div"><input placeholder="Email" className="input-log" onChange={(e)=>{setEmail(e.target.value)}} /></div>
    <div className="login-button" onClick={signUp} >Create Account</div>
    <div className="login-button1" onClick={()=>{navigate('/login')}} >Go Back </div>
    </div>
    </div>
   </div>
  )
}

export default SignUp