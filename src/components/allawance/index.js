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

import "./allawance.css";
import TableDashboard from "./allawanceTable";



function Allawance() {
  const [modalVisible, setModalVisible] = useState(false);

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
              <form>
                <MDBRow>
                  <MDBCol>
                    <label>
                      EMPLOYEE ID:
      <input type="text" />
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label>
                      AMOUNT:
    <input type="text" />
                    </label>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <label>
                      PAID DATE:
      <input type="text" />
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
