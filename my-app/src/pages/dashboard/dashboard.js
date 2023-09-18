// src/components/Dashboard.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Employee Count',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Employee Count Chart</h2>
          <Bar data={data} />
        </div>
        <div className="col-md-6">
          <h2>Logs</h2>
         
        </div>
      </div>
      <h2>Employee List</h2>
  
    </div>
  );
};

export default Dashboard;
