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
import "./leave.css";
import TableDashboard from "./leaveTable";
import axios from "axios";


function Allawance() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const modalClose = () => {
    setModalVisible(false);
  };


  const addLeave = async (e) => {
    e.preventDefault();
    var data = {
      date,
      time,
      reason,
    };
    console.log(data);
    try {
      await axios.post('https://ds-backend-focus.herokuapp.com/api/employee/create.php', data);
      console.log('done');
    } catch (error) {
      console.log(error);

    }
  };




  return (
    <MDBContainer>
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
                    Leave Date:
      <input
                      type="text"
                      onChange={(e) => {
                        e.target.value && setDate(e.target.value);
                      }}
                    />
                  </label>
                </MDBCol>
                <MDBCol>
                  <label>
                    Reason:
    <input type="text"
                      onChange={(e) => {
                        e.target.value && setReason(e.target.value);
                      }}
                    />
                  </label>
                </MDBCol>
                <MDBCol>
                  <label>
                    Time from:
      <input type="text"
                      onChange={(e) => {
                        e.target.value && setTime(e.target.value);
                      }}
                    />
                  </label>
                </MDBCol>
              </MDBRow>
              <MDBRow>

              </MDBRow>


              <input type="submit" value="Submit" />

              <MDBBtn

                color="primary"
                onClick={() => {
                  setModalVisible(false)
                }}
              ></MDBBtn>








            </form>
          </div>
        </div>
      </MDBModal>
    </MDBContainer>
  );

}
export default Allawance;
