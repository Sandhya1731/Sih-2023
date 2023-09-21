import React from "react";
import "../BusLIst/BusLIst.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BusSchedule from "../Components/BusSchedule";
const data = [
  {
    start: "Ambala",
    destination: "kurukshetra",
    startTime: "10:40",
    endTime: "3:40",
    totalTime: "4h 55m",
    seatLeft: "43",
    rating: "4",
    totalSeats: "50",
    vehicalNo: "HR07 BS2023",
    type: "AC/NON-AC Seater(2+2)",
    busNo: "HPBS 1",
  },
  {
    start: "Ambala",
    destination: "kurukshetra",
    startTime: "10:40",
    endTime: "3:40",
    totalTime: "4h 55m",
    seatLeft: "43",
    rating: "4",
    totalSeats: "50",
    vehicalNo: "HR07 BS2023",
    type: "AC/NON-AC Seater(2+2)",
    busNo: "HPBS 1",
  },
  {
    start: "Ambala",
    destination: "kurukshetra",
    startTime: "10:40",
    endTime: "3:40",
    totalTime: "4h 55m",
    seatLeft: "43",
    rating: "4",
    totalSeats: "50",
    vehicalNo: "HR07 BS2023",
    type: "AC/NON-AC Seater(2+2)",
    busNo: "HPBS 1",
  },
  {
    start: "Ambala",
    destination: "kurukshetra",
    startTime: "10:40",
    endTime: "3:40",
    totalTime: "4h 55m",
    seatLeft: "43",
    rating: "4",
    totalSeats: "50",
    vehicalNo: "HR07 BS2023",
    type: "AC/NON-AC Seater(2+2)",
    busNo: "HPBS 1",
  },
];
const BusLIst = () => {
  return (
    <>
      <Navbar />
      <div className="bus-lists">
        <BusSchedule data={data} />
      </div>
      <Footer />
    </>
  );
};

export default BusLIst;
