import React, { Component } from "react";
import Slidebar from "../../components/slidebar/slidebar";
import Navbar from "../../components/navbar/navbar";
import Profile from "../../components/profile";
import Dashboard from "../../components/dashboard";
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
    if (this.props.match.params.name === "profile") {
      this.setState({ query: "profile", component: <Profile /> });
    } else if (this.props.match.params.name === "main") {
      this.setState({
        query: this.props.match.params.name,
        component: <Dashboard />,
      });
    } else {
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
