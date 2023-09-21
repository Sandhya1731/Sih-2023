import React from "react";
import Navbar from "../Navbar/Navbar";
import bus from "../../src/images/bg-img.jpg";
import "./Home.css";
import Services from "../Services/Services";
import SearchBar from "../Components/SearchBar";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <img src={bus} className="background-img" alt="bus" />
      <div className="style-text">
        Discover Your Life, Travel Where You Want
      </div>
      <SearchBar />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
