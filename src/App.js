//import logo from "./logo.svg";
import "./assets/css/material-dashboard.css";
import Login from "./pages/login/login";

import LeaveMain from "./pages/leave-main/leave-main";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="wrapper ">
            <Route exact path="/" component={Login} />
            <Route exact path="/leave-main" component={LeaveMain} />
            <Route exact path="/about" component={LeaveMain} />
          </div>
        </div>
    </Router>
  );
}

export default App;
