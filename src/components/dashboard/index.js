import React, { Component, useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
import axios from "axios";
//import "./newsletter.css";

function Dashboard() {

  const [value, onChange] = useState(new Date());
  const [totalEmp, setTotal] = useState();
  const [totalAttendance, setTotalAttendance] = useState();
  const [totalPending, setTotalPending] = useState();

  useEffect(async () => {
    document.title = "Dashboard";
    getEmployee();
    getPresent();
    getPending();

  }, [])


  const getEmployee = async () => {
    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/employee/read.php')

      .then(res => {

        console.log(res.data.length);
        setTotal(res.data.length);

      }

      ).catch(err => {
        console.log(err);
      })
  }
  const getPresent = async () => {
    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/attendance/present.php')

      .then(res => {

        console.log(res.data.length);
        setTotalAttendance(res.data.length);

      }

      ).catch(err => {
        console.log(err);
      })
  }

  const getPending = async () => {
    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/leave/pending.php')

      .then(res => {

        console.log(res.data.length);
        setTotalPending(res.data.length);

      }

      ).catch(err => {
        console.log(err);
      })
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>

          <MDBCard  >
            <div className='card-employee' ><h3>  TOTAL EMPLOYEES: {totalEmp} </h3></div>
            {/* <MDBCardBody ></MDBCardBody> */}
          </MDBCard>

        </MDBCol>
        <MDBCol>
          <MDBCard>
            <div className='card-present' ><h3>  TODAY PRESENT :{totalAttendance} </h3></div>
            {/* <MDBCardBody ><h3> TODAY PRESENT :{totalAttendance} </h3></MDBCardBody> */}
          </MDBCard>

        </MDBCol>
        <MDBCol>
          <MDBCard>
            <div className='card-req' ><h3> PENDING LEAVE REQ : {totalPending} </h3></div>
            {/* <MDBCardBody ><h3> PENDING LEAVE REQ : {totalPending} </h3></MDBCardBody> */}
          </MDBCard>

        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>   <MDBCard className={"full-height-card"}>
          <MDBCardBody>
            <h3>Attendance Summery</h3>
            <div className="chart_contatiner">
              <div><Chart /></div>
            </div>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className={"full-height-card"}>
            <MDBCardBody>
              <div className="chart-div">
                <Calendar
                  onChange={onChange}
                  value={value}
                />
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Dashboard;



