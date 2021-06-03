import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import axios from "axios";
import "./table.css";

//import "./newsletter.css";

function TableDashboard() {

  const [items, setitems] = useState([]);
  const [total, setTotal] = useState();

  useEffect(async () => {

    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/notice/read.php')

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
        <p>{obj.title}</p>
      </td>

      <td>
        <p>{obj.message}</p>
      </td>
      <td>
        <p>

        </p>
      </td>
    </tr>
  })

  return (
    <MDBTable scrollY maxHeight={400}>
      <MDBTableHead>
        <tr>
          <th> Title</th>
          <th>Notice</th>
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
