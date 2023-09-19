import React from 'react';
import { Link } from 'react-router-dom'; 
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const navigate = useNavigate();
  function handleLogut() {
    localStorage.clear()
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand" to="/dashboard">Dashboard</Link> 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/employeeList">Employee </Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/department">Department </Link> 
            </li>

          
          </ul>

        </div>
        <div className="d-flex me-2">

                 
                  <p className='mb-0' style={{cursor:'pointer'}} onClick={handleLogut}>Logout</p>  
                     
                      
                   
                  </div>
      </div>
    </nav>
  );
};

export default Navbar;
