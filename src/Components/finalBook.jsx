import React, { useState } from 'react'
import axios from 'axios'
import { useStore } from '../Store/Store'

const FinalBook = () => {
    const [date , seDate] = useState('')
    const [time , seTime] = useState('')
    const [address , setAddress] = useState('')
    const api = useStore((state)=> state.apiendpoint)

    const onBook = () =>{
        alert(`Date : ${date}` +"\n"+`Time : ${time}` +"\n"+`Address : ${address}` )
        axios.post(`${api}/bookservice`, {address , date ,time , status :'pending'}).then((result)=>{
            console.log(result)
            alert("Booked")
        })
    }

  return (
    <div>
        <div>Please fill in details </div>
        <textarea placeholder='Address' onChange={(e)=>{setAddress(e.target.value)}} required></textarea>
        <input type='date' onChange={(e)=>{seDate(e.target.value)}} required/>
        <input type='time' onChange={(e)=>{seTime(e.target.value)}} required/>
        <div className='book-but but' onClick={onBook} > Book</div>
    </div>
  )
}

export default FinalBook