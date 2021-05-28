import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBModal,
} from "mdbreact";
import User from "../../assets/images/user.png";
import "./employee.css";
import TableDashboard from "./employeeTable";
import SlimText from "../slimText";

//import "./newsletter.css";

class Employee extends Component {
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
            <MDBRow>
              <MDBCol>
                {this.state.firstBoxClick ? (
                  <SlimText />
                ) : (
                  <MDBCard
                    onClick={() => {
                      this.setState({ firstBoxClick: true });
                    }}
                  >
                    <MDBCardBody className="card-text"></MDBCardBody>
                  </MDBCard>
                )}
              </MDBCol>
              <MDBCol>
                {this.state.secondBoxClick ? (
                  <SlimText />
                ) : (
                  <MDBCard
                    onClick={() => {
                      this.setState({ secondBoxClick: true });
                    }}
                  >
                    <MDBCardBody className="card-text"></MDBCardBody>
                  </MDBCard>
                )}
              </MDBCol>
              <MDBCol>
                {this.state.thirdBoxClick ? (
                  <SlimText />
                ) : (
                  <MDBCard
                    onClick={() => {
                      this.setState({ thirdBoxClick: true });
                    }}
                  >
                    <MDBCardBody className="card-text"></MDBCardBody>
                  </MDBCard>
                )}
              </MDBCol>
            </MDBRow>

            <div className={`table-box`}>
              <div className="add-btn">
                <MDBBtn className="rounded-btn" color="info" onClick={() => {
                          this.setState({
                            modalVisible: true,
                          });
                        }}>
                  <i className="material-icons">add</i> Add New
                </MDBBtn>
              </div>

              <TableDashboard />
            </div>
          </MDBCol>
        </MDBRow>
        <MDBModal
          isOpen={this.state.modalVisible}
          backdrop={false}
          toggle={() => {
            this.setState({ modalVisible: !this.state.modalVisible });
          }}
          centered
          className="modal-popup"
        >
          <div className="btns-down">
            <div className="btn-position">
            <form>
           <label>
           Employee ID: <input type="text" name="name" />
           Name: <input type="text" name="name" />
           NIC: <input type="text" name="name" />
           DOB: <input type="text" name="name" />
           Designation: <input type="text" name="name" />
           Gender:<input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
           
          </label>
  
        </form>
              <MDBBtn
                color="primary"
                onClick={() => {
                  this.setState({
                    modalVisible: !this.state.modalVisible,
                  });
                }}
              ></MDBBtn>
              <MDBBtn
                color="primary"
              // onClick={() => {
              //   this.setState({
              //     modalVisible: !this.state.modalVisible,
              //   });
              // }}
              ></MDBBtn>
            </div>
          </div>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default Employee;
