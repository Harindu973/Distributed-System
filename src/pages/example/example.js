import React, { Component } from "react";
import Slidebar from "../../components/slidebar/slidebar";
import Navbar from "../../components/navbar/navbar";

//import "./newsletter.css";

class Page extends Component {
    render(){
        return(
            <div className="wrapper ">
        
            <Slidebar />
            <div className="main-panel">
              <Navbar />

            </div>
          </div>
        );
    }
}
export default Page;