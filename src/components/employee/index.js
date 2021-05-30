import React, { Component, useEffect, useState } from "react";
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
import axios from "axios";

//import "./newsletter.css";
function Employee() {

  const [name, setName] = useState('');
  const [nic, setNic] = useState('');
  const [dob, setDob] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const modalClose = () => {
    setModalVisible(false);
  };

  const addEmployee = async () => {
    var data = {
      name,
      dob,
      nic,
      designation,
      gender,
      email,
      phone,
    };
    console.log('done');
    try {
      await axios.post('http://api.focusoeuvre.tech/erp-focus/api/employee/create.php', data);
      console.log('done');
    } catch (error) {
      console.log(error);

    }
  };




  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBRow>
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="card-text">Total</MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="card-text">Total</MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="card-text">Total</MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          <div className={`table-box`}>
            <div className="add-btn">
              <MDBBtn className="rounded-btn" color="info" onClick={() => {

                setModalVisible(true)
                  ;
              }}>
                <i className="material-icons">add</i> Add New
                </MDBBtn>
            </div>

            <TableDashboard />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBModal
        isOpen={modalVisible}
        backdrop={false}
        // toggle={() => {
        //   this.setState({ modalVisible: !this.state.modalVisible });
        // }}
        centered
        className="modal-popup"
      >
        <div className="btns-down">
          <div className="btn-position">
            <form>

              <MDBRow>
                <MDBCol>
                  <label>
                    Name:
                      <input type="text"
                      onChange={setName}
                    // value={name}
                    />
                  </label>
                </MDBCol>
                <MDBCol>
                  <label>
                    NIC_NO:
                    <input type="text"
                      onChange={setNic}
                    // value={nic}
                    />
                  </label>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <label>
                    Date Of Birth:
                      <input type="text"
                      onChange={setDob}
                    // value={dob}
                    />
                  </label>
                </MDBCol>
                <MDBCol>
                  <label>
                    GENDER:
                    <input type="text"
                      onChange={setGender}
                    // value={gender}
                    />
                  </label>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <label>
                    EMAIL Adreess:
                      <input type="text"
                      onChange={setEmail}
                    // value={email}
                    />
                  </label>
                </MDBCol>
                <MDBCol>
                  <label>
                    PHONE:
                    <input type="text"
                      onChange={setPhone}
                    // value={phone}
                    />
                  </label>
                </MDBCol>

              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <label>
                    DESIGNATION:
                      <input type="text"
                      onChange={setDesignation}
                    // value={designation}
                    />
                  </label>
                </MDBCol>
                <MDBCol>

                </MDBCol>

              </MDBRow>
              <input type="submit" value="Submit" onClick={addEmployee} />

              <MDBBtn color="primary"
                onClick={modalClose}
              >Cancel</MDBBtn>








            </form>

          </div>
        </div>
      </MDBModal>
    </MDBContainer>
  );

}
export default Employee;
