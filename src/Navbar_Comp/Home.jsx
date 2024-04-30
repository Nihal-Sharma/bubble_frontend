import React from 'react'
import LoginForm from '../Components/LoginForm'
import { useNavigate } from "react-router-dom";
import {useStore} from '../Store/Store'

const Home = () => {
  const navigate = useNavigate()
  const checklogin = useStore((state)=> state.loggedin)

  const BookButton = () =>{
    if(checklogin == 'true'){
      navigate('/chooseservice')
    }
    else {
      navigate('/login')
    }
  }



  return (
    // <div style={{width :'100vw' , display :'flex' , alignItems :'center' , flexDirection :'column'}}>
    //     <text style={{fontSize :'30px'}}>Book a Service</text>
    //     <div style={{marginTop :'100px'}}>
    //         {localStorage.getItem("LOGGEDIN") =="true" ? <></> : <LoginForm/>}
    //     </div>
    // </div>
    <div>
      <button style={{fontSize :'30px'}} onClick={BookButton} >Book a Service</button>
    </div>
  )
}

export default Home