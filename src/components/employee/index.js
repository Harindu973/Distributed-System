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
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
//import "./newsletter.css";
const Employee = () => {

  const [name, setName] = useState('');
  const [nic, setNic] = useState('');
  const [dob, setDob] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [empId, setEmpId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [total, setTotal] = useState();




  useEffect(async () => {

    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/employee/read.php')

      .then(res => {

        console.log(res.data.length);
        setTotal(res.data.length);

      }

      ).catch(err => {
        console.log(err);
      })

  }, [])


  const modalClose = () => {
    setModalVisible(false);
  };

  //////////////////////////await axios.delete('https://api.focusoeuvre.tech/erp-focus/api/leave/delete.php', data);
  const addAttendacne = async () => {

    var data = {
      name,
      empId,
      dob,
      nic,
      designation,
      gender,
      email,
      phone,
    };
    try {
      if (empId) {
        await axios.post('https://api.focusoeuvre.tech/erp-focus/api/attendance/create.php', data);
        console.log("addAttendacne ");
      }
      else {
        console.log("addAttendacne error");
      }
    }
    catch (error) {
      console.log(error);
      store.addNotification({
        title: "error",
        message: "Somthing went wrong",
        type: "danger",
        container: "top-left",
        insert: "top",
        dismiss: { duration: 500 },
      })

    }
  }



  const addEmployee = async (e) => {
    e.preventDefault();
    var data = {
      name,
      empId,
      dob,
      nic,
      designation,
      gender,
      email,
      phone,
    };
    console.log(data);
    try {
      if (name && empId && dob && nic && designation && gender && email && phone) {
        await axios.post('https://api.focusoeuvre.tech/erp-focus/api/employee/create.php', data);
        store.addNotification({
          title: "Succses",
          message: "Added Employee successfully!",
          type: "success",
          container: "top-left",
          insert: "top",
          dismiss: { duration: 500 },
        })
        addAttendacne();
        console.log('done');
        setModalVisible(false);
        window.location.reload();
      }
      else {
        store.addNotification({
          title: "error",
          message: "Empty Fileds",
          type: "danger",
          container: "top-left",
          insert: "top",
          dismiss: { duration: 500 },

        })
      }

    } catch (error) {
      console.log(error);
      store.addNotification({
        title: "error",
        message: "Somthing went wrong",
        type: "danger",
        container: "top-left",
        insert: "top",
        dismiss: { duration: 500 },
      })

    }
  };




  return (
    <>
      <ReactNotification />
      <MDBContainer>

        <MDBRow>
          <MDBCol>

            <MDBRow>
              <MDBCol>

                <MDBCard>

                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>

                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>
                  <MDBCardBody ><h3> TOTAL EMPLOYEES: {total} </h3></MDBCardBody>
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
          centered
          className="modal-popup"
        >
          <div className="btns-down">
            <div className="btn-position">
              <form onSubmit={(e) => addEmployee(e)}>

                <MDBRow>
                  <MDBCol>
                    <label>
                      Employee ID:
                      <input type="text"
                        onChange={(e) => {
                          e.target.value && setEmpId(e.target.value);
                        }}
                      // value={designation}
                      />
                    </label>

                  </MDBCol>
                  <MDBCol>
                    <label>
                      Name:
                      <input type="text"
                        onChange={(e) => {
                          e.target.value && setName(e.target.value);
                        }}
                      />
                    </label>

                  </MDBCol>
                </MDBRow>
                <MDBRow>

                  <MDBCol>
                    <label>
                      NIC_NO:
                    <input type="text"
                        onChange={(e) => {
                          e.target.value && setNic(e.target.value);
                        }}
                      />
                    </label>

                  </MDBCol>
                  <MDBCol>
                    <label>
                      GENDER:
                    <input type="text"
                        onChange={(e) => {
                          e.target.value && setGender(e.target.value);
                        }}
                      />
                    </label>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <label>
                      Date Of Birth:
                      <input type="text"
                        onChange={(e) => {
                          e.target.value && setDob(e.target.value);
                        }}
                      />
                    </label>

                  </MDBCol>
                  <MDBCol>
                    <label>
                      PHONE:
                    <input type="text"
                        onChange={(e) => {
                          e.target.value && setPhone(e.target.value);
                        }}
                      // value={phone}
                      />
                    </label>
                  </MDBCol>

                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <label>
                      EMAIL Adreess:
                      <input type="text"
                        onChange={(e) => {
                          e.target.value && setEmail(e.target.value);
                        }}
                      />
                    </label>


                  </MDBCol>
                  <MDBCol>
                    <label>
                      DESIGNATION:
                      <input type="text"
                        onChange={(e) => {
                          e.target.value && setDesignation(e.target.value);
                        }}
                      />
                    </label>

                  </MDBCol>


                </MDBRow>
                <input type="submit" value="Submit" />
                <MDBBtn
                  color="primary"
                  onClick={() => {
                    setModalVisible(false)
                  }}
                >Cancel</MDBBtn>

              </form>

            </div>
          </div>
        </MDBModal>
      </MDBContainer>
    </>
  );

}
export default Employee;
