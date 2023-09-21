import "./Services.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Heading from "../Components/Heading.js";
const myData = [
  {
    title: "Live Bus Tracking",
    content: "Start and explore a wide range of exciting travel experience.",
  },
  {
    title: "Service Demo",
    content: "Start and explore a wide range of exciting travel experience.",
  },
  {
    title: "Service Demo 2",
    content: "Start and explore a wide range of exciting travel experience.",
  },
];

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios.get("./Data.json").then((res) => setData(res.data));
    setData(myData);
  }, []);
  console.log(data);

  return (
    <div className="App">
      <Heading />
      <Card data={data} />
    </div>
  );
};

export default Services;
