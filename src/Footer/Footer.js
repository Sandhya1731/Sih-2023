import React from "react";
import "./Footer.css";
import loc from "../images/loc.svg";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="column logo-bg">
          <img src={loc} alt="" />
        </div>
        <div className="column">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="#">Old city Street,Usa</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#">Link 7</a>
            </li>
            <li>
              <a href="#">Link 8</a>
            </li>
            <li>
              <a href="#">Link 10</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="horizontal-line" />
        <div className="copyright">Developed with 💖 by Coders.Random()</div>
      </div>
    </footer>
  );
};

export default Footer;
