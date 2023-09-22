import React,{useEffect, useState} from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import "./SearchBar.css";
import BusLIst from "../BusLIst/BusLIst";
import Home from "../Home/Home";
import {Link} from 'react-router-dom'
const SearchBar = () => {
  // const handleSearch = () =>{
  //   window.location.href="/busList";
  // }
  const [showBusList, setShowBusList] = useState(false);
  const [searchData, setSearchData] = useState({ foo: 'bar' }); // Your search data
 const [src,setSrc]=useState("");
 const [dest,setDest]=useState("");
  const handleSearch = () => {
    // Toggle the flag to render BusList component
    setShowBusList(true);
  };
  let data2 ={};
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };


useEffect(()=>{
  data2= {
    src:{src},
    dest:{dest},
    dateselected:{selectedDate}
  };

  console.log(data2);
},[src,dest,selectedDate]);
  
  return (
    <div className="footbar">
      <div className="menuBar">
        <div className="footlinks">
          <FaMapMarkerAlt className="icon" />{" "}
          <div>
            <div className="menu">Location</div>
            <input
          type="text"
          className="loc"
          value={src}
          placeholder="source"
          onChange={(e) => setSrc(e.target.value)}
        />
          </div>
        </div>
        <div className="footlinks"> 
          <FaMapMarkerAlt className="icon" />{" "}
          <div>
            <div className="menu">Location</div> 
             <input
          type="text"
          className="loc"
          value={dest}
          placeholder="destination"
          onChange={(e) => setDest(e.target.value)}
        />
          </div>
        </div>
        <div className="footlinks">
          <FaMapMarkerAlt className="icon" />{" "}
          <div>
          <label htmlFor="datePicker" className="menu">Select a Date: </label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
     
            <div>
     
    </div>
          </div>
        </div>
      </div>
      <Link to="/busList" state={{src , dest , selectedDate}}>
      {/* <Link to={{ pathname: '/busList?foo:bar' }}> */}
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
      </Link> 
    </div> 
  );
};

export default SearchBar;
