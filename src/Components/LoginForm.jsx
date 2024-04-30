import React, { useState } from "react";
import { useStore } from "../Store/Store";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

import { auth } from "../Firebase/setup";
import { signInWithPhoneNumber ,RecaptchaVerifier} from "firebase/auth";

const LoginForm = () => {
 const navigate = useNavigate()
  const verified = useStore((state)=> state.login)

  const [phone ,setphone] =useState('')
  const[otp , setOtp] = useState('')

  const [otpreq, setOtpreq] = useState("false");


  const requestotp = async()=>{
   try{
    const recaptcha = new RecaptchaVerifier(auth , "recaptcha" , {})
    const confirmation = await signInWithPhoneNumber(auth , phone , recaptcha)
    console.log(confirmation)
    setOtpreq("true")
   }
   catch(err){
    console.log(err)
   }
  }

  const verify = () =>{
  
    localStorage.setItem("LOGGEDIN" ,"true")
    navigate("/chooseservice")
  
  }


  return (
    <div
      style={{
        border: "4px solid grey",
        padding :'30px',
        width: "40vw",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          width: "100%",
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        {" "}
        Please Login First
      </div>
      <div
        style={{
          marginBottom: "30px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <text style={{ fontSize: "22px" }}>Phone Number : {phone} </text>
        <div>
        <PhoneInput 
        country={'in'}
      
        onChange={(e)=>{setphone(phone)}}
        /></div>
      </div>
      <div>
        <button
          style={{
            fontSize: "20px",
            height: "50px",
            borderRadius: "10px",
            color: "white",
            backgroundColor: "grey",
          }}
          onClick={requestotp}
        >
          Send OTP
        </button>
      </div>
      <div id="recaptcha"></div>
      {otpreq == "true" ? (
        <div style={{ width: "100%"  ,display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop :'50px'
        }}>
          <input
            placeholder="Enter The OTP"
            style={{
              width: "35%",
              height: "40px",
              fontSize: "20px",
             
            }}
          ></input>
          <button
            style={{
              fontSize: "20px",
              height: "50px",
              borderRadius: "10px",
              color: "white",
              backgroundColor: "grey",
              padding :'10px',
              marginTop :'20px'
            }}
            onClick={verify}
          >
            Verify
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoginForm;
