import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseService = () => {
  const navigate = useNavigate()

  const bookService = () =>{
    navigate('/book')
  }

  return (
    // <div style={{width :'100vw'}}>
    //   <div style={{ textAlign: "center", fontSize: "5vh" }}>Our Services</div>
    //   <div className="test-block">
    //     <div className="service-tab">
    //       <div style={{ display: "flex", flexDirection: "column" , marginBottom :'100px'}}>
    //         <text className="main-heading">Service 1</text>
    //         <text className="desc-heading" >This is Service 1</text>
    //       </div>
    //       <div className="book-but" onClick={bookService}>Book</div>
    //     </div>
    //     <div className="service-tab">
    //       <div style={{ display: "flex", flexDirection: "column" , marginBottom :'100px' }}>
    //         <text className="main-heading">Service 2</text>
    //         <text className="desc-heading">
    //           This is Service 2 , known for its best and cleanliness , provided
    //           at right time and right place
    //         </text>
    //       </div>
    //       <div className="book-but" onClick={bookService}>Book</div>
    //     </div>
    //     <div className="service-tab">
    //       <div style={{ display: "flex", flexDirection: "column"  , marginBottom :'100px'}}>
    //         <text className="main-heading" >Service 3</text>
    //         <text className="desc-heading">This is Service 3</text>
    //       </div>
    //       <div className="book-but" onClick={bookService}>Book</div>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
};

export default ChooseService;
