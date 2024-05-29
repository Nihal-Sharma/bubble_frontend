import React, { useEffect, useState } from 'react'
import { useStore } from "../Store/Store";
import axios from 'axios';

const Orders = () => {
    const api = useStore((state)=> state.apiendpoint)
    const [orders , setorders] = useState([])

    useEffect(()=>{
        axios.post(`${api}/viewreq`,  {status :'pending'}).then((result)=>{console.log(result.data) ; setorders(result.data)}  )
    },[])


  return (
    <div className='orders-main'>
        {/* <div className='order-box'>
                <div className="name-order">Name</div>
                <div className='order'>Adress</div>
                <div className="order">Time</div>
                <div className="order">Date</div>
                <div className='order'>Phone</div>
                <div className='order'>Type</div>

        </div> */}
        {orders == '' ? <div className='order-box'>No Orders Yet</div> : <></> }
        {orders.map((order)=><div className='order-box'>
                <div className="name-order">{order.username} </div>
                <div className='order'> <span className='specs'>Address :     </span>  {order.address}</div>
                <div className="order"> <span className='specs'>Time :        </span>{order.time}</div>
                <div className="order"> <span className='specs'>Date :        </span>{order.date}</div>
                <div className='order'><span className='specs'>Phone Number : </span> {order.phone} </div>
                <div className='order'><span className='specs'>Type :         </span> {order.type} </div>
                <div className='but-completeted' >Completed ?</div>

        </div>)}
    </div>
  )
}

export default Orders