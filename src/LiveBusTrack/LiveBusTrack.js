import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SearchInput from "../Components/SearchInput";
import Tracker from "../Components/Tracker";
import "../LiveBusTrack/LiveBusTrack.css";
const LiveBusTrack = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="head">Live Bus Tracking</div>
        <SearchInput />
        <Tracker />
        <Footer />
      </div>
    </div>
  );
};

export default LiveBusTrack;
