import React, { useState } from 'react';

const Dashboard = () => {
  // Define state variables to store your metrics
  const [daysToHire, setDaysToHire] = useState(10);
  const [daysToFill, setDaysToFill] = useState(5);
  const [acceptanceRate, setAcceptanceRate] = useState(75);
  const [withdrawalRate, setWithdrawalRate] = useState(10);

  return (
    <div className="container-fluid h-100">
      <h2>Dashboard</h2>
      <div className="row ">
        <div className="col-md-4 mb-3">
          <div className="dashboard-box h-100 border  p-3">
            <p>Technical hiring</p>
            <div className="d-flex align-items-center">
    <h1>{daysToHire}</h1>
    <span className="ms-2">Days to Hire</span>
  </div>
  
  <div className="d-flex align-items-center">
    <h1>{daysToFill}</h1>
    <span className="ms-2">Days to Fill</span>
  </div>
  <div className="d-flex align-items-center">
    <h1>{acceptanceRate}%</h1>
    <span className="ms-2">Acceptance Rate</span>
  </div>
  
  <div className="d-flex align-items-center">
    <h1>{withdrawalRate}%</h1>
    <span className="ms-2">Withdrawal Rate</span>
  </div>
        
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="dashboard-box h-100 border  p-3">
          <p> Non-Technical hiring</p>
          <div className="d-flex align-items-center">
    <h1>{daysToHire}</h1>
    <span className="ms-2">Days to Hire</span>
  </div>
  
  <div className="d-flex align-items-center">
    <h1>{daysToFill}</h1>
    <span className="ms-2">Days to Fill</span>
  </div>
  <div className="d-flex align-items-center">
    <h1>{acceptanceRate}%</h1>
    <span className="ms-2">Acceptance Rate</span>
  </div>
  
  <div className="d-flex align-items-center">
    <h1>{withdrawalRate}%</h1>
    <span className="ms-2">Withdrawal Rate</span>
  </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="dashboard-box h-100 border  p-3">
            <p>Recruitment Cost</p>
            {/* Display other metrics as needed */}
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 mb-3">
          <div className="dashboard-box h-100 border p-3">
          <p>Current Hiring</p>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="dashboard-box h-100 border 0-3">
          <p>Top Hiring</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
