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
import "./dashboard.css";
import TableDashboard from "../dashboardTable";
import SlimText from "../slimText";

//import "./newsletter.css";

class Dashboard extends Component {
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
          <MDBCol size={4}>
            <MDBCard className={"full-height-card"}>
              <MDBCardBody>
                <img src={User} alt="user profile" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
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
export default Dashboard;
