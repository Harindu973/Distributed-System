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
import "./leave.css";
import TableDashboard from "./leaveTable";
import axios from "axios";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function Leave() {
  const [empId, setEmpId] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [leaveDesc, setLeaveDesc] = useState("");
  const [leaveDate, setLeaveDate] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [totalPending, setTotalPending] = useState();
  const [totalApproved, setTotalApproved] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(async () => {
    document.title = "Dashboard";

    getPending();
    getApproved();

  }, [])


  const modalClose = () => {
    setModalVisible(false);
  };
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


  const getApproved = async () => {
    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/leave/approved.php')

      .then(res => {

        console.log(res.data.length);
        setTotalApproved(res.data.length);

      }

      ).catch(err => {
        console.log(err);
      })
  }






  const addLeave = async (e) => {
    e.preventDefault();
    var data = {
      empId,
      leaveType,
      leaveDesc,
      leaveDate,
      leaveTime,
    };
    console.log(data);
    try {
      if (empId && leaveType && leaveDesc && leaveDate && leaveTime) {
        await axios.post('https://api.focusoeuvre.tech/erp-focus/api/leave/create.php', data);
        console.log('done');
        store.addNotification({
          title: "Succses",
          message: "Added Leave successfully!",
          type: "success",
          container: "top-left",
          insert: "top",
          dismiss: { duration: 500 },
        })
        setModalVisible(false);
        window.location.reload()
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

    }
  };




  return (
    <>
      <ReactNotification />
      <MDBContainer>


        <MDBRow>

          <MDBCol>
            <MDBCard>
              <MDBCardBody ><h3> APPROVED  LEAVE REQ :{totalApproved} </h3></MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardBody ><h3> PENDING LEAVE REQ :{totalPending} </h3></MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>

            <div className={`table-box`}>
              <div className="add-btn">
                <MDBBtn className="rounded-btn" color="info" onClick={() => {
                  setModalVisible(true)
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
          <div>
            <div className="btn-position">

              <form onSubmit={(e) => addLeave(e)}>
                <MDBRow>
                  <MDBCol>
                    <label>
                      Employee ID:
      <input
                        type="text"
                        onChange={(e) => {
                          e.target.value && setEmpId(e.target.value);
                        }}
                      />
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label>
                      Leave Type:
    <input type="text"
                        onChange={(e) => {
                          e.target.value && setLeaveType(e.target.value);
                        }}
                      />
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label>
                      Description:
                        <input type="text"
                        onChange={(e) => {
                          e.target.value && setLeaveDesc(e.target.value);
                        }}
                      />
                    </label>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <label>
                      Leave Date:
      <input
                        type="text"
                        onChange={(e) => {
                          e.target.value && setLeaveDate(e.target.value);
                        }}
                      />
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label>
                      Time From	:
    <input type="text"
                        onChange={(e) => {
                          e.target.value && setLeaveTime(e.target.value);
                        }}
                      />
                    </label>
                  </MDBCol>
                  <MDBCol>

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
export default Leave;
