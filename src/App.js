import "./App.css";
import BusLIst from "./BusLIst/BusLIst";
import BusSchedule from "./Components/BusSchedule";
import Home from "./Home/Home";
import LiveBusTrack from "./LiveBusTrack/LiveBusTrack";
import LoginPage from "./Login/LoginPage";
import SignupPage from "./Login/signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/login" exact component={Home} />
          <Route path="/" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/liveBusTrack" component={LiveBusTrack} />
          <Route path="/busSchedule" component={BusSchedule} />
          <Route path="/busList" component={BusLIst} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
