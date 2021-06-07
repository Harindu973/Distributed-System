import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBModal,
} from "mdbreact";
import axios from "axios";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "./attendance.css";
import TableDashboard from "./attendanceTable";
function Attendance() {
  const [empId, setEmpId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const dt = null;
  const [time, setDate] = useState(dt);

  const modalClose = () => {
    setModalVisible(false);
  };
  const [total, setTotal] = useState();


  useEffect(async () => {
    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/attendance/present.php')
      .then(res => {
        console.log(res.data.length);
        setTotal(res.data.length);
      }
      ).catch(err => {
        console.log(err);
      })
  }, [])


  const addAttendance = async (e) => {
    e.preventDefault();
    // let dt = new Date().toLocaleDateString();
    var myCurrentDate = new Date();
    var dt = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate() + '- ' + myCurrentDate.getHours() + ':' + myCurrentDate.getMinutes();




    console.log(dt)
    setDate(dt);
    var data = {
      empId,
      time
    };
    console.log(data);
    try {
      if (empId) {
        await axios.put('https://api.focusoeuvre.tech/erp-focus/api/attendance/update.php', data);
        console.log('done');
        console.log(time);
        store.addNotification({
          title: "Succses",
          message: "Attendance marked successfully!",
          type: "success",
          container: "top-left",
          insert: "top",
          dismiss: { duration: 500 },
        })
        setModalVisible(false);
      }
      else {
        store.addNotification({
          title: "error",
          message: "Please Enter the Employee ID",
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
        <MDBContainer className="profile-container">
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
                    <MDBCardBody> <h3> Today Presents: {total} </h3></MDBCardBody>
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
          <div >
            <div >
              <form onSubmit={(e) => addAttendance(e)}>

                <MDBRow>
                  <MDBCol>
                    <label>
                      Employee ID:
        <input type="text"
                        onChange={(e) => {
                          e.target.value && setEmpId(e.target.value);
                        }}
                      />
                    </label>
                  </MDBCol>

                </MDBRow>
                <MDBRow>
                  {/* <MDBCol> */}
                  <input type="submit" value="Submit" />

                  {/* </MDBCol> */}
                  <MDBCol>
                    <MDBBtn
                      color="primary"
                      onClick={() => {
                        setModalVisible(false)
                      }}
                    >Cancel</MDBBtn>

                  </MDBCol>
                </MDBRow>
              </form>

            </div>
          </div>
        </MDBModal>
      </MDBContainer>
    </>
  );

}
export default Attendance;
