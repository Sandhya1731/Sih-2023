import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="footbar">
      <div className="menuBar">
        <div className="footlinks">
          <FaMapMarkerAlt className="icon" />{" "}
          <div>
            <div className="menu">Location</div> <div className="loc">abc</div>
          </div>
        </div>
        <div className="footlinks">
          <FaMapMarkerAlt className="icon" />{" "}
          <div>
            <div className="menu">Location</div> <div className="loc">abc</div>
          </div>
        </div>
        <div className="footlinks">
          <FaMapMarkerAlt className="icon" />{" "}
          <div>
            <div className="menu">Check-Out</div>{" "}
            <div className="loc">15 june 2023</div>
          </div>
        </div>
      </div>
      <div className="search">
        <MdSearch
          style={{
            width: "38px",
            height: "44px",
            position: "absolute",
            top: "50%",
            left: "60px",
            transform: "translate(0,-50% )",
          }}
        />
        <div className="searchText">Search...</div>
      </div>
    </div>
  );
};

export default SearchBar;
