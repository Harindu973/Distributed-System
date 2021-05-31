import React, { useState } from "react";
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

function Attendance() {
  const [modalVisible, setModalVisible] = useState(false);
  const modalClose = () => {
    setModalVisible(false);
  };


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
                        setModalVisible(true)
                      }}
                    ></MDBBtn>
                    <MDBBtn
                      color="primary"
                      onClick={() => {
                        setModalVisible(false)
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
        isOpen={modalVisible}
        backdrop={false}
        toggle={() => {
          setModalVisible(false)
        }}
        centered
        className="modal-popup"
      >
        <div className="btns-down">
          <div className="btn-position">
            <MDBBtn
              color="primary"
              onClick={() => {
                setModalVisible(false)
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
export default Attendance;
