import React from "react";
import Login from "./login";
import "../Login/LoginPage.css";
import bus from "../images/bg-img2.jpg";
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
