import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import axios from "axios";
import "./table.css";

//import "./newsletter.css";

function TableDashboard() {

  const [items, setitems] = useState([]);
  const [total, setTotal] = useState();


  useEffect(async () => {

    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/employee/read.php')

      .then(res => {
        console.log(res.data);
        console.log(res.data.length);
        setTotal(res.data.length);
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
      <td>
        <p>{obj.name}</p>
      </td>
      <td>
        <p>{obj.nic}</p>
      </td>
      <td>
        <p>{obj.dob}</p>
      </td>
      <td>
        <p>{obj.designation}</p>
      </td>
      <td>
        <p>{obj.gender}</p>
      </td>
      <td>
        <p>{obj.email}</p>
      </td>
      <td>
        <p>{obj.phone}</p>
      </td>
      <td>
        <p>
          <i className="material-icons option">more_vert</i>
        </p>
      </td>
    </tr>
  })

  return (
    <>
      {/* <Total total={total} /> */}
      <MDBTable scrollY maxHeight={400}>
        <MDBTableHead>
          <tr>
            <th>EMPLOYEE ID</th>
            <th>NAME</th>
            <th>NIC</th>
            <th>DOB</th>
            <th>DESIGNATION</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <>{itemlist}</>
        </MDBTableBody>
      </MDBTable>
    </>
  );

}

export default TableDashboard;
