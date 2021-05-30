import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import axios from "axios";
import "./table.css";

//import "./newsletter.css";

 function TableDashboard () {

  const[items,setitems] = useState([]);

    useEffect(async () => {

        await axios.get('http://api.focusoeuvre.tech/erp-focus/api/leave/read.php')

        .then(res=>{
            console.log(res.data);

            setitems(res.data);
        }

        ).catch(err=>{
            console.log(err);
        })

    }, [])

    const itemlist=items.map((obj)=>{
        return <tr>
            <td>
              <p>{obj.leaveId}</p>
            </td>
            <td>
              <p>{obj.empId}</p>
            </td>
            <td>
              <p>{obj.leaveDate}</p>
            </td>
            <td>
              <p>{obj.leaveDesc}</p>
            </td>
            <td>
              <p>{obj.leaveTime}</p>
            </td>
            <td>
              <p>
                <i className="material-icons option">more_vert</i>
              </p>
            </td>
          </tr>     
    })

    return (
      <MDBTable scrollY maxHeight={400}>
        <MDBTableHead>
          <tr>
            <th>ID</th>
            <th>EMPLOYEE ID</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Time from</th>
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
