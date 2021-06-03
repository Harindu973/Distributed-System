import React, { Component, useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import axios from "axios";

const Donut = (Component) => {

  const [options, setOptions] = useState({ labels: ['Absent', 'Prsent',] },);
  const [series, setSeries] = useState([]);
  const [totalAttendance, setTotalAttendance] = useState();
  const [totalEmp, setTotal] = useState();
  useEffect(async () => {
    document.title = "Dashboard";
    getPresent();
    getEmployee();
    chartRefresh();

  }, [])

  const getPresent = async () => {
    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/attendance/read.php')

      .then(res => {

        console.log(res.data.length);
        setTotalAttendance(res.data.length);

      }

      ).catch(err => {
        console.log(err);
      })
  }

  const getEmployee = async () => {
    await axios.get('https://api.focusoeuvre.tech/erp-focus/api/employee/read.php')

      .then(res => {

        console.log(res.data.length);
        setTotal(res.data.length);

      }

      ).catch(err => {
        console.log(err);
      })
  }


  const chartRefresh = () => {
    setSeries([10, 5]);
    console.log(totalEmp);
    console.log(totalAttendance);
    console.log(series);
  };

  return (
    <div className="donut">
      <Chart
        options={options}
        series={series}
        type="donut" width="380" />
    </div>
  );

}

export default Donut;