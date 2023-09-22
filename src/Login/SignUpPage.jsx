import React from "react";
import "../Login/LoginPage.css";
import bus from "../../src/images/bg-img2.jpg";
import Signup from "./signup";
const SignUpPage = () => {
  return (
    <div>
      <Signup />
      <div className="backgroundImg">
        <img src={bus} className="background-img" alt="bus" />
      </div>
    </div>
  );
};

export default SignUpPage;