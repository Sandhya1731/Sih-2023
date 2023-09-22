import React from "react";
import "./Card.css";
import anime from "animejs";
import { useEffect } from "react";
import loc from "../../src/images/loc.svg";
const Card = ({ data }) => {
  let cardAnimation = () => {
    anime({
      targets: ".Card",
      translateX: [-2000, 0],
      direction: "normal",
      easing: "linear",
      delay: 500,
      opacity: [0, 1],
    });
  };

  useEffect(() => {
    cardAnimation();
  });

  return (
    <div className="Card">
      {data.map((item, index) => (
        <div className="box" key={index}>
          <img src={loc} alt="" />
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
