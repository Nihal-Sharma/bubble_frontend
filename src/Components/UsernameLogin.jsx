import React, { useState } from "react";
import { useStore } from "../Store/Store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UsernameLogin = () => {
    const navigate = useNavigate()
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const Login = () =>{
  
        // localStorage.setItem("LOGGEDIN" ,"true")
        // navigate("/chooseservice")
      axios.post("https://bubble-backend.onrender.com/login" , {username , password}).then((result)=>{
        // localStorage.setItem("TOKEN" , res.data)
        if(result.data.username == null){
          alert("Login Denied")
        }
        else{
          alert("Login successfull")
          localStorage.setItem("LOGGEDIN" ,"true")
          navigate("/chooseservice")

        }
      })
      }


    const NewAcc = () =>{
      navigate('/SignUp')
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
      <div  className="mainbox heightt" onClick={Login} >
      <text className="login-but">Login</text></div>
      <div  className="mainbox heightt1" onClick={NewAcc} >
        <text>Create Account</text>
      </div>
    </div>
  );
};

export default UsernameLogin;
