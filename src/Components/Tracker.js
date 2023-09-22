import React from "react";
import style from "../Components/Tracker.module.css";
import { useState, useEffect } from "react";
// import LineTo from "react-lineto";
import Green from "../images/tick.png";
import Grey from "../images/blank.svg";
import Refresh from "../images/refresh.svg";
const Tracker = ({ data }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <div className={style.container}>
      <div className={style.headContainer}>
        <div style={{ gridColumn: "3" }}>
          <h3>Hp123</h3>
        </div>
        <div className={style.updateInfo}>
          <h2> LastUpdated:</h2>
          <div className={style.time}>
            <h1 className={style.timer}>{currentTime}</h1>
            <button className={style.time}>
              <img alt="refresh" src={Refresh} className={style.timer} />
              <h1 className={style.timer}>Refresh</h1>
            </button>
          </div>
        </div>
      </div>

      <hr className={style.horizontalLine} />

      <div className={style.station} style={{ fontWeight: "600" }}>
        <h2 style={{ fontWeight: "600" }}>Arrival</h2>
        <h2 style={{ gridColumn: "3", fontWeight: "600" }}>Station</h2>
        <h2 style={{ gridColumn: "8", fontWeight: "600" }}>Departure</h2>
      </div>
      <div className={style.station}>
        <div>
          <h2>src</h2>
          <h2>src</h2>
        </div>
        <div className={style.A}>
          <img src={Green} style={{ height: "35px" }} alt="tick mark" />
        </div>
        <div>
          <h2>kurukshetra</h2>
          <h2>src</h2>
        </div>
        <div style={{ gridColumn: "8" }}>
          <h2>18:05</h2>
          <h2>18:05</h2>
        </div>
      </div>
      <div className={style.station} style={{ marginTop: "50px" }}>
        <div>
          <h2>19:00</h2>
          <h2>20:00</h2>
        </div>
        <div className={style.B}>
          <img src={Grey} style={{ height: "30px" }} alt="tick mark" />
        </div>
        <div>
          <h2>karnal</h2>
          <h2>30km</h2>
        </div>
        <div style={{ gridColumn: "8" }}>
          <h2>18:05</h2>
          <h2>18:05</h2>
        </div>
      </div>
      {/* <LineTo className={style.line} from="A" to="B" borderColor="black" borderStyle="solid" borderWidth={1} delay={true} /> */}
    </div>
  );
};

export default Tracker;
