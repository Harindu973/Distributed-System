import React, { Component } from "react";
import Slidebar from "../../components/slidebar/slidebar";
import Navbar from "../../components/navbar/navbar";
import Dashboard from "../../components/dashboard";
import Attendance from "../../components/attendance";
import Allawance from "../../components/allawance";
import Employee from "../../components/employee";
import Signup from "../../components/signup";
import Payroll from "../../components/payroll";
import { withRouter } from "react-router";


import "./leave-main.css";

class Page extends Component {
  constructor() {
    super();
    this.state = {
      query: this.props?.match?.params.name || "main",
      component: <Dashboard />,
    };
    this.selectRightComponent = this.selectRightComponent.bind(this);
  }

  selectRightComponent() {
    if (this.props.match.params.name === "employee") {
      this.setState({ query: "employee", component: <Employee /> });
    } else if (this.props.match.params.name === "main") {
      this.setState({
        query: this.props.match.params.name,
        component: <Dashboard />,
      });
    }
    else if (this.props.match.params.name === "attendance") {
      this.setState({
        query: this.props.match.params.name,
        component: <Attendance />,
      });
    }
    else if (this.props.match.params.name === "allawance") {
      this.setState({
        query: this.props.match.params.name,
        component: <Allawance />,
      });
    }
    else if (this.props.match.params.name === "signup") {
      this.setState({
        query: this.props.match.params.name,
        component: <Signup/>,
      });
    }
    else if (this.props.match.params.name === "payroll") {
      this.setState({
        query: this.props.match.params.name,
        component: <Payroll />,
      });
    }
    else {
      this.setState({
        query: "main",
        component: <Dashboard />,
      });
      this.props?.history.push("/dashboard/main");
    }

    console.log("---------component did mount------------");
  }

  componentDidMount() {
    this.selectRightComponent();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prev state", prevProps, prevState, this.props);
    if (prevProps.match.params.name !== this.props.match.params.name) {
      this.selectRightComponent();
    }
  }

  render() {
    let state = this.state;

    return (
      <div className="wrapper ">
        <Slidebar queryName={state.query} />
        <div className="main-panel">
          <Navbar />

          <div className="main-container-wrapper">{state.component}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Page);
