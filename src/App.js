import logo from './logo.svg';
import './assets/css/material-dashboard.css';
import Slidebar from "./components/slidebar/slidebar";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div className="wrapper ">
          <Route exact path="/" component={Slidebar} />
        </div>
      </div>
    </Router>
  );
}

export default App;
