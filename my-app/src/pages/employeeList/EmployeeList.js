import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import EmployeeDetails from './EmployeeDetails';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function EmployeeList() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Manager' },
    { id: 2, name: 'Jane Smith', position: 'Developer' },
    { id: 3, name: 'John Doe', position: 'Manager' },
    { id: 4, name: 'John Doe', position: 'Manager' },
    { id: 5, name: 'John Doe', position: 'Manager' },
    { id: 6, name: 'John Doe', position: 'Manager' },
  ]);

  const [editingEmployee, setEditingEmployee] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    position: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addEmployee = () => {
    if (formData.name && formData.position) {
      const newEmployee = {
        id: employees.length + 1,
        name: formData.name,
        position: formData.position,
      };

      setEmployees([...employees, newEmployee]);
      setFormData({ name: '', position: '' });
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <>
      <Navbar />
      <div>
        <EmployeeDetails />
        <div className='px-2 py-2'>
        <h2>Employee List</h2>
        <form>
            <div className='row align-items-end'>
          <div className=" col-md-4 mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="position" className="form-label">
              Position:
            </label>
            <input
              type="text"
              id="position"
              name="position"
              className="form-control"
              value={formData.position}
              onChange={handleInputChange}
            />
          </div>
          <div className='col-md-2 mb-3'>
          <button
            type="button"
            className="btn btn-primary"
            onClick={addEmployee}
          >
            Add Employee
          </button>
          </div>
          </div>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>
                  <button>
                    <EditIcon />
                  </button>
                  <button onClick={() => deleteEmployee(employee.id)}>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default EmployeeList;
