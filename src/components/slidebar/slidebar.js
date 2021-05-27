import React, { Component } from "react";
import Home from "../../assets/images/home.png";
import Employee from "../../assets/images/employee.png";
import Calendar from "../../assets/images/calendar.png";
import Left from "../../assets/images/left.png";
import Charges from "../../assets/images/money.png";
import { Link } from "react-router-dom";
import "./slidebar.css";
//import "./newsletter.css";

class SideBar extends Component {
  render() {
    // console.log("---query name---", this.props);
    let queryName = this.props.queryName;
    return (
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
        {/*
                Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
                
                Tip 2: you can also add an image using data-image tag
                    */}
        <div className="logo">
          <a href="#" className="simple-text logo-normal">
            DS Project
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li
              className={`nav-item ${queryName === "dashboard" ? "active" : null}`}
            >
              <Link className="nav-link" to="/dashboard/main">
                {/* <i className="material-icons">dashboard</i> */}
                <img src={Home} alt="Dashboard" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li
              className={`nav-item ${queryName === "employee" ? "active" : null
                }`}
            >
              <Link className="nav-link" to="/dashboard/employee">
                {/* <i className="material-icons">person</i> */}
                <img src={Employee} alt="Employee" />

                <p id="text">Employee</p>
              </Link>
            </li>
            <li
              className={`nav-item ${queryName === "attendance" ? "active" : null
                }`}
            >
              <Link className="nav-link" to="/dashboard/attendance">
                {/* <i className="material-icons">content_paste</i> */}
                <img src={Calendar} alt="Calendar" />
                <p>Attendance</p>
              </Link>
            </li>
            <li
              className={`nav-item ${queryName === "allawance" ? "active" : null
                }`}
            >
              <Link className="nav-link" to="/dashboard/allawance">
                {/* <i className="material-icons">library_books</i> */}
                <img src={Charges} alt="Charges" />
                <p>Allawance</p>
              </Link>
            </li>
            <li
              className={`nav-item ${queryName === "leave" ? "active" : null
                }`}
            >
              <Link className="nav-link" to="/dashboard/leave">
                {/* <i className="material-icons">library_books</i> */}
                <i class="material-icons"> logout</i>
                <p>Leave</p>
              </Link>
            </li>
            {/* <li className="nav-item ">
              <a className="nav-link" href="./icons.html">
                <i className="material-icons">bubble_chart</i>
                <p>Icons</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./map.html">
                <i className="material-icons">location_ons</i>
                <p>Maps</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./notifications.html">
                <i className="material-icons">notifications</i>
                <p>Notifications</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./rtl.html">
                <i className="material-icons">language</i>
                <p>RTL Support</p>
              </a>
            </li> */}
            <li className="nav-item active-pro ">
              <Link className="nav-link" to="/">
                <i className="material-icons">assignment_return</i>
                <p>Sign Out </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default SideBar;
