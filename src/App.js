import logo from "./logo.svg";
import "./assets/css/material-dashboard.css";
import Slidebar from "./components/slidebar/slidebar";
import Navbar from "./components/navbar/navbar";

import LeaveMain from "./pages/leave-main/leave-main";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="wrapper ">
          <Slidebar />
          <div className="main-panel">
            <Navbar />
            <Route exact path="/" component={LeaveMain} />
            <Route exact path="/leave-main" component={LeaveMain} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
