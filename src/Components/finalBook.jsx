import React, { useState } from 'react'
import axios from 'axios'
import { useStore } from '../Store/Store'
import { useParams } from 'react-router-dom'

const FinalBook = () => {
    const [date , seDate] = useState('')
    const [time , seTime] = useState('')
    const [address , setAddress] = useState('')
    const [phone , setPhone] = useState('')
    const api = useStore((state)=> state.apiendpoint)
    const typ = useParams()

    const onBook = () =>{
        
        axios.post(`${api}/bookservice`, { username : localStorage.getItem("USERNAME") , address , date ,time ,phone, type : typ.name ,status :'pending'}).then((result)=>{
            
            alert("Thanks for Booking , You will recieve a confirmation call shortly")
            seDate('')
            seTime('')
            setAddress('')
            setPhone('')
        })
    }

  return (
    // <div>
    //     <div>Please fill in details </div>
    //     <textarea placeholder='Address' onChange={(e)=>{setAddress(e.target.value)}} required></textarea>
    //     <input type='date' onChange={(e)=>{seDate(e.target.value)}} required/>
    //     <input type='time' onChange={(e)=>{seTime(e.target.value)}} required/>
    //     <div className='book-but but' onClick={onBook} > Book</div>
    // </div>
    <div className='finalbook-main'>
      <div className="info-box">
        <div className='txt-head-final'>Kindly Fill in the <span className='txt-final'>Details</span></div>
        <div className='inputs-final'>
      <input placeholder='Address' onChange={(e)=>{setAddress(e.target.value)}} required className='input-finalb' value={address} ></input>
      <input type='number' placeholder='Phone Number' className='input-finalb' onChange={(e)=>{setPhone(e.target.value)}}  value={phone} />
      <text>Date :</text>
      <input type='date' onChange={(e)=>{seDate(e.target.value)}} required className='input-finalb' value={date} />
      <text>Time :</text>
      <input type='time' onChange={(e)=>{seTime(e.target.value)}} required className='input-finalb' value={time} />
      </div>
      <div className="final-book" onClick={onBook} >Book</div>
      </div>
    </div>
  )
}

export default FinalBook