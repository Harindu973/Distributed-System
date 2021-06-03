import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import axios from "axios";
import "./table.css";

//import "./newsletter.css";

function TableDashboard() {

  const [items, setitems] = useState([]);

  useEffect(async () => {

    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/attendance/read.php')

      .then(res => {
        console.log(res.data);

        setitems(res.data);
      }

      ).catch(err => {
        console.log(err);
      })

  }, [])

  const itemlist = items.map((obj) => {
    return <tr>
      <td>
        <p>{obj.empId}</p>
      </td>
      {/* <td>
        <p>{obj.date}</p>
      </td> */}
      <td>
        <p>{obj.time}</p>
      </td>
      <td>

      </td>
    </tr>
  })

  return (
    <MDBTable scrollY maxHeight={400}>
      <MDBTableHead>
        <tr>
          <th>EMPLOYEE ID</th>
          {/* <th>Date</th> */}
          <th>Date and Time</th>
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <>{itemlist}</>
      </MDBTableBody>
    </MDBTable>
  );

}

export default TableDashboard;
