import React, { Component } from "react";
import "./login.css";
import Loginimg from "../../assets//images/login.png";
//import { css } from "@emotion/core";
// First way to import

class Login extends Component {
  render() {
    // let value=(this.props.pass) ? undefined : "";
    return (
      <div>
        <div className="container">
          <div id="main-outer-div">
          <div id="logo-div">
               
            <img id="logo-div" src={Loginimg} alt="user" />
             </div>
           
            <div id="title-div">
               
              <h4 className="title">Login</h4>
            </div>

            <div id="outer-login-form-div">
              <form action="" method="" onSubmit={this.props.onSubmit}>
                {/* <div className="form-group"> */}
                  <input className="login-form-input"
                    type="text"
                    // className="form-control"
                    placeholder="Email"
                    required="required"
                    name="Username"
                  />
                {/* </div> */}
                {/* <div className="form-group"> */}
                  <input className="login-form-input"
                    type="password"
                    // className="form-control"
                    placeholder="Password"
                    required="required"
                  />
                {/* </div> */}
                {/* <div className="form-group"> */}
                  <input className="login-form-input"
                    type="submit"
                    // className="btn btn-primary btn-block btn-lg btn-mystyle"
                    value="Login"
                    id="submitBtn"
                  />
                {/* </div> */}
                {!this.props.pass ? (
                  <p className="alert">Invalid UserName or Password</p>
                ) : (
                  ""
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;
