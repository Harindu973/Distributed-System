import React, { Component } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import "./table.css";

//import "./newsletter.css";

class TableDashboard extends Component {
  render() {
    return (
      <MDBTable scrollY maxHeight={400}>
        <MDBTableHead>
          <tr>
            <th>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultChecked"
                />
                <label
                  class="custom-control-label"
                  for="defaultChecked"
                ></label>
              </div>
            </th>
            <th>INVOICE</th>
            <th>CUSTOMER ID</th>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
            <th>TRACKING</th>
            <th></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              {" "}
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultChecked0"
                />
                <label
                  class="custom-control-label"
                  for="defaultChecked0"
                ></label>
              </div>
            </td>
            <td>
              <p>003452</p>
              <p>003452</p>
            </td>
            <td>
              <p></p>
              <p></p>
            </td>
            <td>
              <p>22 June 2020</p>
              <p>22 June 2020</p>
            </td>
            <td>
              <p>$200.00</p>
              <p>$1200.00</p>
            </td>
            <td>
              <p>Delivered</p>
              <p>Pending</p>
            </td>
            <td>
              <p>IN332942</p>
              <p>IN332942</p>
            </td>
            <td>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultChecked1"
                />
                <label
                  class="custom-control-label"
                  for="defaultChecked1"
                ></label>
              </div>
            </td>
            <td>
              <p>003452</p>
              <p>003452</p>
            </td>
            <td>
              <p></p>
              <p></p>
            </td>
            <td>
              <p>22 June 2020</p>
              <p>22 June 2020</p>
            </td>
            <td>
              <p>$200.00</p>
              <p>$1200.00</p>
            </td>
            <td>
              <p>Delivered</p>
              <p>Pending</p>
            </td>
            <td>
              <p>IN332942</p>
              <p>IN332942</p>
            </td>
            <td>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultChecked2"
                />
                <label
                  class="custom-control-label"
                  for="defaultChecked2"
                ></label>
              </div>
            </td>
            <td>
              <p>003452</p>
              <p>003452</p>
            </td>
            <td>
              <p></p>
              <p></p>
            </td>
            <td>
              <p>22 June 2020</p>
              <p>22 June 2020</p>
            </td>
            <td>
              <p>$200.00</p>
              <p>$1200.00</p>
            </td>
            <td>
              <p>Delivered</p>
              <p>Pending</p>
            </td>
            <td>
              <p>IN332942</p>
              <p>IN332942</p>
            </td>
            <td>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultChecked3"
                />
                <label
                  class="custom-control-label"
                  for="defaultChecked3"
                ></label>
              </div>
            </td>
            <td>
              <p>003452</p>
              <p>003452</p>
            </td>
            <td>
              <p></p>
              <p></p>
            </td>
            <td>
              <p>22 June 2020</p>
              <p>22 June 2020</p>
            </td>
            <td>
              <p>$200.00</p>
              <p>$1200.00</p>
            </td>
            <td>
              <p>Delivered</p>
              <p>Pending</p>
            </td>
            <td>
              <p>IN332942</p>
              <p>IN332942</p>
            </td>
            <td>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultChecked4"
                />
                <label
                  class="custom-control-label"
                  for="defaultChecked4"
                ></label>
              </div>
            </td>
            <td>
              <p>003452</p>
              <p>003452</p>
            </td>
            <td>
              <p></p>
              <p></p>
            </td>
            <td>
              <p>22 June 2020</p>
              <p>22 June 2020</p>
            </td>
            <td>
              <p>$200.00</p>
              <p>$1200.00</p>
            </td>
            <td>
              <p>Delivered</p>
              <p>Pending</p>
            </td>
            <td>
              <p>IN332942</p>
              <p>IN332942</p>
            </td>
            <td>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultChecked5"
                />
                <label
                  class="custom-control-label"
                  for="defaultChecked5"
                ></label>
              </div>
            </td>
            <td>
              <p>003452</p>
              <p>003452</p>
            </td>
            <td>
              <p></p>
              <p></p>
            </td>
            <td>
              <p>22 June 2020</p>
              <p>22 June 2020</p>
            </td>
            <td>
              <p>$200.00</p>
              <p>$1200.00</p>
            </td>
            <td>
              <p>Delivered</p>
              <p>Pending</p>
            </td>
            <td>
              <p>IN332942</p>
              <p>IN332942</p>
            </td>
            <td>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    );
  }
}

export default TableDashboard;