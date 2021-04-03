import React, { Component } from "react";
import { MDBCard, MDBCardBody } from "mdbreact";
import Left from "../../assets/images/left.png";
import Upward from "../../assets/images/upward.png";
import "./slimText.css";

class SlimText extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }

  render() {
    return (
      <MDBCard className="dark-theme">
        <MDBCardBody>
          <div className="completed">
            <div>
              <h4>342.6K</h4>
              <h6>Successfully Completed</h6>
            </div>
            <div
              onMouseEnter={() => this.setState({ hover: true })}
              onMouseLeave={() => this.setState({ hover: false })}
            >
              <img src={this.state.hover ? Left : Upward} alt="arrow" />
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default SlimText;
