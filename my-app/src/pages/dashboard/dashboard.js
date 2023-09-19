import React, { useState } from "react";
import { BarChart,PieChart } from "@mui/x-charts";
import Navbar from "../Navbar/navbar";


const Dashboard = () => {
  // Define state variables to store your metrics
  const [daysToHire, setDaysToHire] = useState(10);
  const [daysToFill, setDaysToFill] = useState(5);
  const [acceptanceRate, setAcceptanceRate] = useState(75);
  const [withdrawalRate, setWithdrawalRate] = useState(10);

  const handleClick = () => {
    window.location.href = "/employeeList";
  };

  const chartSetting = {
    xAxis: [
      {
        label: 'month',
      },
    ],
    width: 500,
    height: 400,
  };
  const dataset = [
    {
      Job:'Full stack',
      month: 'Jan',
    },
    {
      Job:'Sales Force',
      month: 'Jan',
    },
    {
      Job:'Digital Marketing',
      month: 'Jan',
    },
    {
      Job:'Deployment',
      month: 'Jan',
    },
    {
      Job:'Staff',
      month: 'Jan',
    },
   
    
  ];
  
  const valueFormatter = (value) => `${value}mm`;

  return (
    <>
      <Navbar />
      <div className="container-fluid h-100 mt-3">
 
        <div className="row ">
          <div className="col-md-4 mb-3">
            <div
              className="dashboard-box h-100 border  p-3"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              <h4>Technical hiring</h4>
              <div className="d-flex align-items-center">
                <h1>{daysToHire}</h1>
                <span className="ms-2">Days to Hire</span>
              </div>

              <div className="d-flex align-items-center">
                <h1>{daysToFill}</h1>
                <span className="ms-2">Days to Fill</span>
              </div>
              <div className="d-flex align-items-center">
                <h1>{acceptanceRate}</h1><small className="fs-4">%</small>
                <span className="ms-2">Acceptance Rate</span>
              </div>

              <div className="d-flex align-items-center">
                <h1>{withdrawalRate}</h1><small className="fs-4">%</small>
                <span className="ms-2">Withdrawal Rate</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div
              className="dashboard-box h-100 border  p-3"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              <h4> Non-Technical hiring</h4>
              <div className="d-flex align-items-center">
                <h1>{daysToHire}</h1>
                <span className="ms-2">Days to Hire</span>
              </div>

              <div className="d-flex align-items-center">
                <h1>{daysToFill}</h1>
                <span className="ms-2">Days to Fill</span>
              </div>
              <div className="d-flex align-items-center">
                <h1>{acceptanceRate}</h1><small className="fs-4">%</small>
                <span className="ms-2">Acceptance Rate</span>
              </div>

              <div className="d-flex align-items-center">
                <h1>{withdrawalRate}</h1><small className="fs-4">%</small>
                <span className="ms-2">Withdrawal Rate</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="dashboard-box h-100 border  p-3">
              <h4>Recruitment Cost</h4>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 30, label: "Technical" },
                      { id: 1, value: 15, label: "Non Technical" },
                      { id: 2, value: 10, label: "staff" },
                    ],
                  },
                ]}
                width={450}
                height={220}
              />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 mb-3">
            <div className="dashboard-box h-100 border p-3">
              <h4>Current Hiring</h4>
              <BarChart
                xAxis={[{ scaleType: "band", data: ["August", "September"] }]}
                series={[{ data: [6, 2] }, { data: [6, 4] }, { data: [5, 6] }]}
                width={800}
                height={450}
              />
            </div>
          </div>
          <div class="col-md-6 mb-3 d-flex flex-column align-items-center justify-content-center">
  <div class="card w-100">
    <div class="card-body">
      <h5 class="card-title">Top Hiring</h5>
      <ul class="list-group">
        <li class="list-group-item">Fullstack</li>
        <li class="list-group-item">Sales Force</li>
        <li class="list-group-item">Digital Marketing</li>
       
      </ul>
    </div>
  </div>
  <div >
     <BarChart

      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'Job' }]}
      series={[{ dataKey: 'seoul', label: 'Top Hiring', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
    </div>
</div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
