// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/loginPage/loginPage';
import Dashboard from './pages/dashboard/dashboard';
import EmployeeList from './pages/employeeList/EmployeeList';
import Department from './pages/designation/Department'

function App() {
  return (
    <>
    <Router>
      <Routes>
    
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/department" element={<Department/>} />
        <Route path="/employeelist" element={<EmployeeList />} />
      
        </Routes>
    
    </Router>
    </>
  );
}

export default App;

