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



function Allawance() {
  const [empId, setEmpId] = useState("");
  const [amount, setAmount] = useState("");
  const [paidDate, setPaidDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);




  const addAllawance = async (e) => {
    e.preventDefault();
    var data = {
      empId,
      amount,
      paidDate,
    };
    console.log(data);
    try {
      await axios.post('http://api.focusoeuvre.tech/erp-focus/api/salary/create.php', data);
      console.log('done');
    } catch (error) {
      console.log(error);

    }
  };





  {
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
                    <label>
                      PAID DATE:
      <input type="text"
                        onChange={(e) => {
                          e.target.value && setPaidDate(e.target.value);
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
                ></MDBBtn>
              </form>

            </div>
          </div>
        </MDBModal>
      </MDBContainer>

    );
  }
}
export default Allawance;
