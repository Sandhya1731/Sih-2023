import React from "react";
import styles from "../Components/BusSchedule.module.css";
import vector from "../images/vector.svg";
import bolt from "../images/material-symbols_electric-bolt-outline.svg";
import stove from "../images/game-icons_gas-stove.svg";
import fuel from "../images/mdi_fuel-pump.svg";
import star from "../images/Vectorstar.svg";
import people from "../images/fluent-mdl2_people (1).svg";

const BusSchedule = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.Card}>
        {data.map((data, index) => (
          <div className={styles.box} key={index}>
            <div className={styles.info}>
              <h2>
                {data.startTime} - {data.endTime}
              </h2>
              <h2 style={{ fontWeight: "275" }}>
                {data.totalTime} . {data.seatLeft} seats left
              </h2>
              <h2>
                <img src={vector} alt="Logo" className={styles.busIcon} />
                {data.busNo} . {data.vehicalNo}
              </h2>
              <h2 style={{ fontWeight: "275" }}>{data.type}</h2>
            </div>
            <div className={styles.loc}>
              <h3>
                {data.start} - {data.destination}
              </h3>
            </div>
            <div></div>
            <div className={styles.third}>
              <div className={styles.icons}>
                <img src={stove} alt="Logo" className={styles.busIcon} />
                <img src={bolt} alt="Logo" className={styles.busIcon} />
                <img src={fuel} alt="Logo" className={styles.busIcon} />
              </div>
              <div>
                <div className={styles.rating}>
                  <img src={star} alt="Logo" className={styles.busIcon} />{" "}
                  {data.rating}
                </div>
                <div className={styles.people}>
                  <img src={people} alt="Logo" className={styles.busIcon} />{" "}
                  {data.totalSeats}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusSchedule;
