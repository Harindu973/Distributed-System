import React, { Component } from "react";


//import "./newsletter.css";

class Compo extends Component {
  render() {
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
              <li className="nav-item active  ">
                <a className="nav-link" href="./dashboard.html">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
            <li className="nav-item ">
              <a className="nav-link" href="./user.html">
                <i className="material-icons">person</i>
                <p>
                  <p id="text">Your Profile</p>
                </p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./tables.html">
                <i className="material-icons">content_paste</i>
                <p>Table List</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="./typography.html">
                <i className="material-icons">library_books</i>
                <p>Typography</p>
              </a>
            </li>
            <li className="nav-item ">
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
            </li>
              <li className="nav-item active-pro ">
                <a className="nav-link">
                  <i className="material-icons">assignment_return</i>
                  <p>Sign Out</p>
                </a>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Compo;
