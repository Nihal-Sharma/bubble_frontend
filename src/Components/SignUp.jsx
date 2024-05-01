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

    const signUp = () =>{
        axios.post("https://bubble-backend.onrender.com/signup" , {username , password , email}).then((result)=>{
            navigate('/login')
        })
    }

    
  return (
    <div className="gg">
       
    <div className="mainbox">
      <input
        placeholder="Username"
        style={{
          height: "3vh",
          fontSize: "2vh",
          padding: "10px",
          borderRadius: "10px",
          width :'100%'
        }}
        onChange={(e)=>{setUsername(e.target.value)}}
      ></input>
    </div>
    <div className="mainbox">
      <input
        placeholder="password"
        type="password"
        style={{
          height: "3vh",
          fontSize: "2vh",
          padding: "10px",
          borderRadius: "10px",
          width :'100%'
        }}
        onChange={(e)=>{setPassword(e.target.value)}}
      ></input>

    </div>

    <div className="mainbox">
      <input
        placeholder="Confirm Password"
        type="password"
        style={{
          height: "3vh",
          fontSize: "2vh",
          padding: "10px",
          borderRadius: "10px",
          width :'100%'
        }}
        onChange={(e)=>{setconfPassword(e.target.value)}}
      ></input>

    </div>
    <div className="mainbox">
      <input
        placeholder="Email"
        type="mail"
        style={{
          height: "3vh",
          fontSize: "2vh",
          padding: "10px",
          borderRadius: "10px",
          width :'100%'
        }}
        onChange={(e)=>{setEmail(e.target.value)}}
      ></input>

    </div>
    <div div className="mainbox heightt" onClick={signUp} >
    <text className="login-but">Create Account</text></div>
    <div  className="mainbox heightt1" onClick={()=>{navigate('/login')}} >
      <text>Go Back</text>
    </div>
  </div>
  )
}

export default SignUp