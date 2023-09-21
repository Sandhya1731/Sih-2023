import React from "react";
import Login from "./login";
import "../Login/LoginPage.css";
import bus from "../../src/images/bg-img2.jpg";
import Signup from "./signup";
const LoginPage = () => {
  return (
    <div>
      <Login />
      <div className="backgroundImg">
        <img src={bus} className="background-img" alt="bus" />
      </div>
    </div>
  );
};

export default LoginPage;
