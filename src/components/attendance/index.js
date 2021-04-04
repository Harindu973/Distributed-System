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
import "./attendance.css";

class Attendance extends Component {
  constructor() {
    super();
    this.state = {
      firstWhiteBox: false,
      secondWhiteBox: false,
      blueBox: false,
      modalVisible: false,
    };
  }

  render() {
    return (
      <MDBContainer>
        <MDBContainer className="profile-container">
          <MDBRow>
            <MDBCol className="two-boxes">
              {" "}
              <MDBCard>
                <MDBCardBody className="card-text">sss</MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="two-boxes">
              {" "}
              <MDBCard>
                <MDBCardBody className="card-text">
                  <div className="btns-down">
                    <div className="btn-position">
                      <MDBBtn
                        color="primary"
                        onClick={() => {
                          this.setState({
                            modalVisible: true,
                          });
                        }}
                      ></MDBBtn>
                      <MDBBtn
                        color="primary"
                        onClick={() => {
                          this.setState({
                            modalVisible: true,
                          });
                        }}
                      ></MDBBtn>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
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
export default Attendance;
