import React, { Component } from "react";
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
import "./allawance.css";
import TableDashboard from "./allawanceTable";
import SlimText from "../slimText";

//import "./newsletter.css";

class Allawance extends Component {
  constructor() {
    super();
    this.state = {
      firstBoxClick: false,
      secondBoxClick: false,
      thirdBoxClick: false,
    };
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>

            <div className={`table-box`}>
              <div className="add-btn">
                <MDBBtn className="rounded-btn" color="info"onClick={() => {
                          this.setState({
                            modalVisible: true,
                          });
                        }}>
                  <i className="material-icons">add</i> Add New
                  
                </MDBBtn>
                
              </div>

              <TableDashboard />
            </div>
          </MDBCol>
        </MDBRow>
        <MDBModal
          isOpen={this.state.modalVisible}
          backdrop={false}
          toggle={() => {
            this.setState({ modalVisible: !this.state.modalVisible });
          }}
          centered
          className="modal-popup"
        >
          <div className="btns-down">
            <div className="btn-position">
            <form>
           <label>
           Employee ID: <input type="text" name="name" />
           Amount: <input type="text" name="name" />
           Paid Date : <input type="text" name="name" />
          </label>
  
        </form>
              <MDBBtn
                color="primary"
                onClick={() => {
                  this.setState({
                    modalVisible: !this.state.modalVisible,
                  });
                }}
              ></MDBBtn>
              <MDBBtn
                color="primary"
              // onClick={() => {
              //   this.setState({
              //     modalVisible: !this.state.modalVisible,
              //   });
              // }}
              ></MDBBtn>
            </div>
          </div>
        </MDBModal>
      </MDBContainer>
      
    );
  }
}
export default Allawance;
