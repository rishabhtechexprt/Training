import React, { useState } from 'react';
import Navbar from '../components/navbar';
import EmployeeDetails from './EmployeeDetails';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Breadindication from '../components/breadcrumb';
import './employeeList.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe',department: 'HR', designation: 'Manager',status:'Active' },
    { id: 2, name: 'Jane Smith',department: 'IT', designation: 'Developer',status:'Active' },
    { id: 3, name: 'Jane Smith',department: 'IT', designation: 'Developer',status:'Active' },
    { id: 4, name: 'Jane Smith',department: 'IT', designation: 'Developer',status:'In-Active' },
    { id: 5, name: 'John Doe',department: 'HR', designation: 'Manager',status:'In-Active' },
    { id: 6, name: 'John Doe',department: 'HR', designation: 'Manager',status:'In-Active' },
    { id: 7, name: 'John Doe',department: 'HR', designation: 'Manager',status:'Active' },
    { id: 8, name: 'John Doe',department: 'HR', designation: 'Manager',status:'Active' },
  ]);

  const [editingEmployee, setEditingEmployee] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addEmployee = () => {
    if (formData.name && formData.designation) {
      const newEmployee = {
        id: employees.length + 1,
        name: formData.name,
        designation: formData.designation,
      };

      setEmployees([...employees, newEmployee]);
      setFormData({ name: '', designation: '' });
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <>
      <Navbar />
      <Breadindication/>
      <div className='py-3'>
       
        <EmployeeDetails />
      
        <h2 className='px-3 mt-3'>Employee List</h2>
        <form>
            <div className='row align-items-end px-3'>
          <div className=" col-md-3 mb-3">
            <label htmlFor="name" className="form-label fw-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter name...'
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="designation" className="form-label fw-bold">
              Designation:
            </label>
            <input
              type="text"
              id="designation"
              placeholder='Enter Designation...'
              name="designation"
              className="form-control"
              value={formData.designation}
              onChange={handleInputChange}
            />
          </div>
          <div className='col-md-2 mb-3 '>
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

        <div className="container-fluid table-responsive">
    
        <div className="col-md-12">
        <table className="table table-striped header-fixed">
          <thead >
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
         
          <tbody  >
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.designation}</td>
                <td>{employee.status}</td>
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
        <div className="col-md-12 text-center">
          <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
        </div>
      
        </div>


       
        
      </div>
    </>
  );
}

export default EmployeeList;
