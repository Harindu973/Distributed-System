import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";
import User from "../../assets/images/user.png";
import "./employee.css";
import TableDashboard from "./employeeMainTable";
import SlimText from "../slimText";

//import "./newsletter.css";

class Employeemain extends Component {
  constructor() {
    super();
    this.state = {
      firstBoxClick: false,
      secondBoxClick: false,
      thirdBoxClick: false,
    };
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>

            <div className={`table-box`}>
              <div className="add-btn">
                <MDBBtn className="rounded-btn" color="info">
                  <i className="material-icons">add</i> Add New
                </MDBBtn>
              </div>

              <TableDashboard />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Employeemain;
