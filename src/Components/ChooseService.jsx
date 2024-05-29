import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseService = () => {
  const navigate = useNavigate()

 
  return (
    <div className="main-chooseService">
      <div className="grey-service">
      <div className="heading-chooseserv">Choose a <span className="service-head-txt"> Service</span></div>
      <div className="show-service-tabs">
        <div className="service-tab">
          <div>

          <div className="service-name">Standard</div>
          <div className="includes">Includes :</div>
          <div className="list">
            <li>
              Vaccum Cleaning
            </li>
            <li>
              Pressure Washing
            </li>
            <li>Polishing (Both Internal and External)</li>
            <li>Washing Completed within 4 Hours of booking</li>
          </div>
          
          </div>
          <div className="gg" > <div className="book-but-serv" onClick={()=>{navigate(`/finalbook/${'standard'}`)}}  >Book Rs 300</div></div>
        </div>
        <div className="service-tab">
          <div>

          <div className="service-name">Premium</div>
          <div className="includes">Includes :</div>
          <div className="list">
            <li>
              Vaccum Cleaning
            </li>
            <li>
              Pressure Washing
            </li>
            <li>Polishing (Both Internal and External)</li>
            <li>Washing Completed within 2 Hours of booking</li>
          </div>
          
          </div>
          <div className="gg" > <div className="book-but-serv" onClick={()=>{navigate(`/finalbook/${'premium'}`)}} >Book Rs 400</div></div>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default ChooseService;
