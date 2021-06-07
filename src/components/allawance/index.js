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
import axios from "axios";
import "./allawance.css";
import TableDashboard from "./allawanceTable";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function Allawance() {
  const [empId, setEmpId] = useState("");
  const [salaryValue, setAmount] = useState("");
  const [salaryDate1, setPaidDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const dt = null;
  const [salaryDate, setDate] = useState(dt);

  const addAllawance = async (e) => {

    var myCurrentDate = new Date();
    var dt = myCurrentDate.getFullYear() + '/' + (myCurrentDate.getMonth() + 1) + '/' + myCurrentDate.getDate() + ' ' + myCurrentDate.getHours() + ':' + myCurrentDate.getMinutes();

    setDate(dt);
    e.preventDefault();

    var data = {
      empId,
      salaryValue,
      salaryDate,
    };
    console.log(data);
    try {
      if (empId && salaryValue) {
        await axios.post('https://api.focusoeuvre.tech/erp-focus/api/salary/create.php', data);
        console.log('done');
        console.log(salaryDate);
        setModalVisible(false);
        store.addNotification({
          title: "Succses",
          message: "Allawance added successfully ",
          type: "success",
          container: "top-left",
          insert: "top",
          dismiss: { duration: 500 },
        })
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





  {
    return (
      <>
        <ReactNotification />
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
            <div >
              <div className="btn-position">
                <form onSubmit={(e) => addAllawance(e)}>
                  <MDBRow>
                    <MDBCol>
                      <label>
                        EMPLOYEE ID:
      <input type="text"
                          onChange={(e) => {
                            e.target.value && setEmpId(e.target.value);
                          }}
                        />
                      </label>
                    </MDBCol>
                    <MDBCol>
                      <label>
                        AMOUNT:
    <input type="text"
                          onChange={(e) => {
                            e.target.value && setAmount(e.target.value);
                          }}
                        />
                      </label>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol>

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
}
export default Allawance;
