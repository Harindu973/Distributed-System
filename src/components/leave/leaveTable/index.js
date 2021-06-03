import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import axios from "axios";
import "./table.css";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


function TableDashboard() {
  const [empId, setEmpId] = useState();
  const [items, setitems] = useState([]);

  const leaveReject = async (e) => {

    console.log(empId);
    try {

      await axios.delete('https://api.focusoeuvre.tech/erp-focus/api/leave/delete.php', { data: { empId: empId } });
      // await axios.delete('https://api.focusoeuvre.tech/erp-focus/api/leave/delete.php', data);
      store.addNotification({
        title: "Succses",
        message: "Added Employee successfully!",
        type: "success",
        container: "top-left",
        insert: "top",
        dismiss: { duration: 500 },
      })

    } catch (error) {
      console.log(error);
      store.addNotification({
        title: "error",
        message: "Somthing went wrong",
        type: "danger",
        container: "top-left",
        insert: "top",
        dismiss: { duration: 500 },
      })

    }
  };


  const leaveAccept = async (e) => {
    // console.log(empID);
    var data = {
      empId
    };
    try {
      // await axios.put('https://api.focusoeuvre.tech/erp-focus/api/leave/update.php', { data: { empId: empID } });
      await axios.put('https://api.focusoeuvre.tech/erp-focus/api/leave/update.php', data);
      store.addNotification({
        title: "Done",
        message: "Leave accepted successfully!",
        type: "success",
        container: "top-center",
        insert: "top",
        dismiss: { duration: 500 },
      })
      console.log('leaveAccept');
      console.log(data);
    }
    catch (error) {
      console.log(error);
      store.addNotification({
        title: "error",
        message: "Somthing went wrong",
        type: "danger",
        container: "top-left",
        insert: "top",
        dismiss: { duration: 500 },
      })

    }
  };






  useEffect(async () => {

    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/leave/read.php')

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
        <p>{obj.status}</p>
      </td>
      <td>
        <p>
          <i className="material-icons option"
            onClick={() => {
              setEmpId(obj.empId)
              leaveAccept();
            }}
          >done</i>

          <i className="material-icons option"
            onClick={() => {
              setEmpId(obj.empId)
              leaveReject();
            }}
          >close</i>
        </p>
      </td>
    </tr >
  })

  return (
    <> <ReactNotification />
      <MDBTable scrollY maxHeight={400}>
        <MDBTableHead>
          <tr>
            <th>ID</th>
            <th>EMPLOYEE ID</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Time from</th>
            <th>Status</th>
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
