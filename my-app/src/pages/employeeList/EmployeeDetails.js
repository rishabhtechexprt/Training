import React, { useState } from 'react';

function EmployeeDetails() {
  // Employee details and initial form data
  const [employee, setEmployee] = useState({
    id: 1,
    name: 'John Doe',
    designation: 'Developer',
    status: 'Active',
  });

  const [formData, setFormData] = useState({
    name: employee.name,
    designation: employee.designation,
    status: employee.status,
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to save changes
  const saveChanges = () => {
    setEmployee({
      ...employee,
      name: formData.name,
      designation: formData.designation,
      status: formData.status,
    });
  };

  return (
    <div className='px-2 py-2'>
      <h2>Employee Details</h2>
   
      <form>
      <div className='row align-items-end '>
        <div className=" col-md-3 ">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3 ">
          <label htmlFor="designation" className="form-label">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            className="form-control"
            value={formData.designation}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3 ">
          <label htmlFor="status" className="form-label">Status:</label>
          <select
            id="status"
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>
      <div className='col-md-2 '>
        <button type="button" className="btn btn-primary" onClick={saveChanges}>
          Save Changes
        </button>
        </div>
        </div>
      </form>
      </div>
   
  );
}

export default EmployeeDetails;
