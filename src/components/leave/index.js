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
import User from "../../assets/images/user.png";
import "./leave.css";
import TableDashboard from "./leaveTable";
import SlimText from "../slimText";

//import "./newsletter.css";

function Allawance()  {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const modalClose = () => {
    setModalVisible(false);
  };

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>

            <div className={`table-box`}>
              <div className="add-btn">
                <MDBBtn className="rounded-btn" color="info"     onClick={() => {
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
         
            <form>



NAME	NIC
DOB	GENDER
DESIGNATION PHONE
EMAIL
  
<MDBRow>
  <MDBCol>
    <label>
    Leave Date:
      <input
       type="text"
       onChange={setDate}
       
       />
    </label>
  </MDBCol>
  <MDBCol>
    <label>
    Reason:
    <input type="text" 
     onChange={setReason}
    />
    </label>
  </MDBCol>
  <MDBCol>
    <label>
    Time from:
      <input type="text" 
       onChange={setTime}
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
