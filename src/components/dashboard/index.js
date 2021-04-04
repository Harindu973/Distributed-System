import React, { Component, useState } from "react";
import Calendar from 'react-calendar';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";
import User from "../../assets/images/user.png";
import "./dashboard.css";
import TableDashboard from "../employee/employeeTable";
import SlimText from "../slimText";
import Chart from "./chart"

//import "./newsletter.css";

function Dashboard() {
  // constructor() {
  //   super();
  //   this.state = {
  //     firstBoxClick: false,
  //     secondBoxClick: false,
  //     thirdBoxClick: false,
  //   };
  // }


  const [value, onChange] = useState(new Date());

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size={6}>
          <MDBRow>
            <MDBCol size={4}>
              <SlimText />
              <MDBCard>
              </MDBCard>
            </MDBCol>
            <MDBCol size={4}>
              <SlimText />
              <MDBCard>
              </MDBCard>
            </MDBCol>
            <MDBCol size={4}>
              <SlimText />
              <MDBCard>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBCard className={"full-height-card"}>
            <MDBCardBody>
              <h3>Attendance Summery</h3>
              <div className="chart_contatiner">
                <div><Chart /></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol size={6}>
          <MDBRow>
            <MDBCard className={"full-height-card"}>
              <MDBCardBody>
                <div>
                  <Calendar
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBRow>

          <MDBRow>
            <MDBCol size={6}>

              <MDBCard >
                <MDBCardBody>
                  <img src={User} alt="user profile" />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size={6}>

              <MDBCard >
                <MDBCardBody>
                  <img src={User} alt="user profile" />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Dashboard;



