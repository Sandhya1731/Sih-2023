import React from "react";
import ReactDOM from "react-dom";
import classes from "./ChartModal.module.css";
const ChartModal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onOkay} />;
  };
  const data = [
    {
      stop: "stop 1",
      arrival: "11 A.M",
      departure: "12 P.M",
      halt: "30mins",
      distance: "10 Km",
    },
    {
      stop: "stop 2",
      arrival: "11 A.M",
      departure: "12 P.M",
      halt: "30mins",
      distance: "10 Km",
    },
    {
      stop: "stop 3",
      arrival: "11 A.M",
      departure: "12 P.M",
      halt: "30mins",
      distance: "10 Km",
    },
    {
      stop: "stop 4",
      arrival: "11 A.M",
      departure: "12 P.M",
      halt: "30mins",
      distance: "10 Km",
    },
    {
      stop: "stop 5",
      arrival: "11 A.M",
      departure: "12 P.M",
      halt: "30mins",
      distance: "10 Km",
    },
  ];
  const ModalOverlay = (props) => {
    return (
      <div className={`${classes.modal} ${classes.card}`}>
        <header className={classes.header}>
          <h2>BUS CHART</h2>
          <div className={classes.subHeader}>
            <div className={classes.busno}>
              <h3>Bus No: {props.busno}</h3>
            </div>
            <div className={classes.type}>
              <h3>Bus Type: Electric</h3>
            </div>
          </div>
        </header>

        <div className={classes.Card}>
          <div className={`${classes.box} ${classes.bgbox}`}>
            <h3>STOP NAME</h3>
            <h3>ARRIVAL TIME</h3>
            <h3>DEPARTURE TIME</h3>
            <h3>HALT</h3>
            <h3>DISTANCE</h3>
          </div>
        </div>
        <div className={classes.Card}>
          {data.map((data, index) => (
            <div
              className={`${index} % 2 === 0 ?${classes.box} :${classes.bgbox} ${classes.box}`}
            >
              <h3>{data.stop}</h3>
              <h3>{data.arrival}</h3>
              <h3>{data.departure}</h3>
              <h3>{data.halt}</h3>
              <h3>{data.distance}</h3>
            </div>
          ))}
        </div>

        <footer className={classes.actions}>
          <button
            type="button"
            onClick={props.onOkay}
            className={classes.button}
          >
            Okay
          </button>
        </footer>
      </div>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onOkay={props.onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay busno={props.busno} onOkay={props.onOkay} />,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};
export default ChartModal;
