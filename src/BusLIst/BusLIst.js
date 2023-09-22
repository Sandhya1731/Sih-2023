import React, { useEffect , useState} from "react";
import "../BusLIst/BusLIst.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BusSchedule from "../Components/BusSchedule";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const data =  [
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

const transformedData = [];

// Define hardcoded values
const hardcodedValues = {
  start: "Ambala",
  destination: "Kurukshetra",
  startTime: "10:40",
  endTime: "3:40",
  totalTime: "4h 55m",
  seatLeft: "43",
  rating: "4",
  totalSeats: "50",
  vehicalNo: "HR07 BS2023",
  type: "AC/NON-AC Seater(2+2)",
  busNo: "HPBS 1",
};

// Iterate over the original data

function BusLIst(props) {

// const [data,setData] =useState([]);
  const location = useLocation();
  const state = location.state;
  console.log(state.src);
  console.log(state.dest);

  // let src = state.data2.src;
  // let dest = state.data2.dest;
  useEffect(() => {
    getBus();
  }, []);

  const getBus = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:8000/getBusesBySourceAndDest",
        {
          source:state.src,
          destination: state.dest,
        }
      );

      if (response.statusText === "OK") {
        console.log("Hello");
        console.log(response.data);

        // setData(response.data.data);
        let originalData = response.data.data;

        originalData.forEach((item) => {
          // Create a new object for the transformed data
          const transformedItem = {
            busNo: item.busNo,
            start: item.busStops[0].name,
            destination: item.busStops[item.busStops.length - 1].name,
            startTime: item.busStops[0].departureTime,
            endTime: item.busStops[item.busStops.length - 1].arrivalTime,
            totalTime: "3hr 55 min",
            seatLeft: hardcodedValues.seatLeft,
            rating: hardcodedValues.rating,
            totalSeats: hardcodedValues.totalSeats,
            vehicalNo: hardcodedValues.vehicalNo,
            type: item.fuelType,
          };
        
          // Add the transformed item to the result array
          transformedData.push(transformedItem);
        });
        

        console.log(transformedData);

      }
    } catch (error) {
      console.log(error);
    }
  };

  
 


  // const foo  = location.state;
  // const params = new URLSearchParams(location.search);
  // const foo = params.get('foo');
  // console.log(foo);
  return (
    <>
    {/* console.log(transformedData); */}
    
      <Navbar />
      <div className="bus-lists">
        <BusSchedule data={data} data2 = {transformedData}/>
      </div>
      <Footer />
    </>
  );
}

export default BusLIst;
