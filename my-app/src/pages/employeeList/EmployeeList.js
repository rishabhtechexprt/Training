import React, { useState } from 'react';
import Navbar from '../components/navbar';
import EmployeeDetails from './EmployeeDetails';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Breadindication from '../components/breadcrumb';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
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
  const [openDialog, setOpenDialog] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const [formData, setFormData] = useState({
    id:'',
    name: '',
    deparment:'',
    designation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleAddEmployee = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleSaveEmployee = () => {
    
    setEmployees([...employees, formData]);
    setOpenDialog(false);
  };     

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <Navbar />
      <Breadindication/>
      <div className='py-3'>
       
        <EmployeeDetails />
      
        <h2 className='px-3 mt-3'>Employee List</h2>
        <form>
            <div className='row align-items-end justify-content-end px-3'>
          
          <div className='col-md-2 mb-1 d-flex justify-content-end '>
          <button
            type="button"
            className="btn btn-primary w-75"
            onClick={handleAddEmployee}
          >
            Add Employee
          </button>
          </div>
          </div>
        </form>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
        <Grid container spacing={2} style={{marginTop:'10px'}} >
        <Grid item   md={12}>
          <TextField
            label="Name"
            name="name"
            
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
          />
          </Grid>
          <Grid item   md={12}>
          <TextField
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            fullWidth
          />
          </Grid>
          <Grid item  md={12}>
          <TextField
            label="Department"
            name="department"
            value={formData.deparment}
            onChange={handleInputChange}
            fullWidth
          />
          </Grid>
          <Grid item md={12}>
          <TextField
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            fullWidth
          />
          </Grid>
          <Grid item xs={12}  md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveEmployee}
          >
            Save
          </Button>
          </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    


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
                <IconButton
                                                               
                                                                aria-haspopup="true"
                                                                onClick={handleMenuClick}
                                                            >
                                                                <MoreVertIcon />
                                                            </IconButton>
                                                            <Menu
                                                            
                                                                anchorEl={anchorEl}
                                                                keepMounted
                                                                open={Boolean(anchorEl)}
                                                                onClose={handleMenuClose}
                                                            >
                                                                <MenuItem >Edit</MenuItem>
                                                                <MenuItem onClick={deleteEmployee} >Delete</MenuItem>
                                                            </Menu>
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
