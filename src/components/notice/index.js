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
import "./notice.css";
import TableDashboard from "./noticeTable";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function Notice() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const modalClose = () => {
    setModalVisible(false);
  };



  const addNotice = async (e) => {
    e.preventDefault();
    var data = {
      title,
      message
    };
    console.log(data);
    try {
      if (title && message) {
        await axios.post('https://api.focusoeuvre.tech/erp-focus/api/notice/create.php', data);
        console.log('done');
        setModalVisible(false);
        store.addNotification({
          title: "Succses",
          message: "Added Notice successfully!",
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



  return (
    <>
      <ReactNotification />
      <MDBContainer>
        <MDBContainer className="profile-container">
          <MDBRow>
            <MDBCol>
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
              <form onSubmit={(e) => addNotice(e)}>

                <MDBRow>
                  <MDBCol>
                    <label>
                      Message Title:
        <input type="text"
                        onChange={(e) => {
                          e.target.value && setTitle(e.target.value);
                        }}
                      />
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label>
                      Message:
        <input type="text"
                        onChange={(e) => {
                          e.target.value && setMessage(e.target.value);
                        }}
                      />
                    </label>
                  </MDBCol>

                </MDBRow>
                <MDBRow>    </MDBRow>
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
export default Notice;



// import React, { Component, useEffect, useState } from "react";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBCard,
//   MDBCardBody,
//   MDBBtn,
//   MDBModal,
// } from "mdbreact";
// import User from "../../assets/images/user.png";

// import TableDashboard from "./employeeTable";
// import SlimText from "../slimText";
// import axios from "axios";
// import ReactNotification from 'react-notifications-component';
// import { store } from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';
// import "./notice.css";
// const Employee = () => {

//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);





  // useEffect(async () => {

  //   await axios.get('https://api.focusoeuvre.tech/erp-focus/api/employee/read.php')

  //     .then(res => {

  //       console.log(res.data.length);
  //       setTotal(res.data.length);

  //     }

  //     ).catch(err => {
  //       console.log(err);
  //     })

  // }, [])


//   const modalClose = () => {
//     setModalVisible(false);
//   };



//   const addEmployee = async (e) => {
//     e.preventDefault();
//     var data = {
//       message,
//       title
//     };
//     console.log(data);
//     try {
//       if (message && title) {
//         await axios.post('https://api.focusoeuvre.tech/erp-focus/api/notice/create.php', data);
//         store.addNotification({
//           title: "Succses",
//           message: "Added Employee successfully!",
//           type: "success",
//           container: "top-left",
//           insert: "top",
//           dismiss: { duration: 500 },
//         })

//         console.log('done');
//         setModalVisible(false);
//       }
//       else {
//         store.addNotification({
//           title: "error",
//           message: "Empty Fileds",
//           type: "danger",
//           container: "top-left",
//           insert: "top",
//           dismiss: { duration: 500 },

//         })
//       }

//     } catch (error) {
//       console.log(error);
//       store.addNotification({
//         title: "error",
//         message: "Somthing went wrong",
//         type: "danger",
//         container: "top-left",
//         insert: "top",
//         dismiss: { duration: 500 },
//       })

//     }
//   };




//   return (
//     <>
//       <ReactNotification />
//       <MDBContainer>

//         <MDBRow>
//           <MDBCol>

//             <MDBRow>
//               <MDBCol>

//                 <MDBCard>

//                 </MDBCard>
//               </MDBCol>
//               <MDBCol>
//                 <MDBCard>

//                 </MDBCard>
//               </MDBCol>
//               <MDBCol>
//                 <MDBCard>
//                   {/* <MDBCardBody ><h3> TOTAL: {total} </h3></MDBCardBody> */}
//                 </MDBCard>

//               </MDBCol>
//             </MDBRow>

//             <div className={`table-box`}>
//               <div className="add-btn">
//                 <MDBBtn className="rounded-btn" color="info" onClick={() => {

//                   setModalVisible(true)
//                     ;
//                 }}>
//                   <i className="material-icons">add</i> Add New
//                 </MDBBtn>
//               </div>

//               <TableDashboard />
//             </div>
//           </MDBCol>
//         </MDBRow>
//         <MDBModal
//           isOpen={modalVisible}
//           backdrop={false}
//           // toggle={() => {
//           //   this.setState({ modalVisible: !this.state.modalVisible });
//           // }}
//           centered
//           className="modal-popup"
//         >
//           <div className="btns-down">
//             <div className="btn-position">
//               <form onSubmit={(e) => addEmployee(e)}>

//                 <MDBRow>
//                   <MDBCol>
//                     <label>
//                       Message Title:
//         <input type="text"
//                         onChange={(e) => {
//                           e.target.value && setTitle(e.target.value);
//                         }}
//                       />
//                     </label>

//                   </MDBCol>
//                   <MDBCol>

//                   </MDBCol>
//                 </MDBRow>
//                 <MDBRow>

//                   <MDBCol>


//                   </MDBCol>
//                   <MDBCol>

//                   </MDBCol>
//                 </MDBRow>
//                 <MDBRow>
//                   <MDBCol>

//                   </MDBCol>
//                   <MDBCol>

//                   </MDBCol>

//                 </MDBRow>
//                 <MDBRow>
//                   <MDBCol>



//                   </MDBCol>
//                   <MDBCol>
//                     <label>
//                       setMessage:
//                       <input type="text"
//                         onChange={(e) => {
//                           e.target.value && setMessage(e.target.value);
//                         }}
//                       // value={designation}
//                       />
//                     </label>

//                   </MDBCol>


//                 </MDBRow>
//                 <input type="submit" value="Submit" />
//                 <MDBBtn
//                   color="primary"
//                   onClick={() => {
//                     setModalVisible(false)
//                   }}
//                 >Cancel</MDBBtn>

//               </form>

//             </div>
//           </div>
//         </MDBModal>
//       </MDBContainer>
//     </>
//   );

// }
// export default Employee;
