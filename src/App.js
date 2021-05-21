//import logo from "./logo.svg";
import "./assets/css/material-dashboard.css";

import LeaveMain from "./pages/leave-main/leave-main";
import LoginComp from "../src/pages/login/index"
import LeavePending from "./pages/leave-pending/leavePending";
import SignUpComp from "./components/signup/index"

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
   
      <Router>
        <div>
          <div className="wrapper ">
            <Route exact path="/" component={LoginComp} />
            <Route exact path="/signup" component={SignUpComp} />

            <Route exact path="/dashboard/leave-main" component={LeaveMain} />
            <Route
              exact
              path="/dashboard/leavePending"
              component={LeavePending}
            />

            <Route exact strict path="/dashboard/:name" component={LeaveMain} />
            {/* <Route exact path="/about" component={LeaveMain} /> */}
          </div>
        </div>
      </Router>
    
  );
}

export default App;
