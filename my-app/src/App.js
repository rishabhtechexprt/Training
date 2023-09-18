// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/loginPage/loginPage';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <>
    <Router>
      <Routes>
    
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    
    </Router>
    </>
  );
}

export default App;

