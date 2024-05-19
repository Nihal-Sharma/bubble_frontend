import React from "react";
import LoginForm from "../Components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/Store";

const Home = () => {
  const navigate = useNavigate();
  const checklogin = useStore((state) => state.loggedin);

  const BookButton = () => {
    if (checklogin == "true") {
      navigate("/chooseservice");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="main-home">
      <div className="car-top-home">
        <div className="top-head-home">
          Make your car Sparkle with <span className="bubble">Bubble Wash</span>
        </div>
        <div className="subhead-home">
          We believe “A clean car leads to a clean ride.
        </div>
        <div className="but-book-top-home">Book a Wash</div>
        <div className="short-top-home">
          Book today and get a 2 wheeler wash free with a regular car wash
        </div>
      </div>
      <div className="why-us-home">
        {/* <div className="txt-whyus-home">Why <span className="us-home">Us?</span> </div> */}
      </div>
    </div>
  );
};

export default Home;
