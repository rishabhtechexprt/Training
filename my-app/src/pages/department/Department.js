import React, { useState } from 'react';
import Navbar from '../components/navbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tracker from '../components/tracker';
import Breadindication2 from '../components/breadcrumbs2';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

function DepartmentList() {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'HR', description: 'Human Resources' },
    { id: 2, name: 'HR', description: 'Human Resources' },
    { id: 3, name: 'HR', description: 'Human Resources' },
    { id: 4, name: 'IT', description: 'Information Technology' },
    { id: 5, name: 'IT', description: 'Information Technology' },
    { id: 6, name: 'IT', description: 'Information Technology' },
    { id: 7, name: 'Finance', description: 'Finance and Accounting' },
    { id: 8, name: 'Finance', description: 'Finance and Accounting' },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleAddDepartment = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleSaveDepartment = () => {
    
    setDepartments([...departments, formData]);
    setOpenDialog(false);
  };     
 

      

  const deleteDepartment = (id) => {
    setDepartments(departments.filter((department) => department.id !== id));
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
      <Breadindication2 />
      <div className="px-2 py-2">
        <Tracker/>
       
        <form>
            <div className='row align-items-end justify-content-end px-3'>
          
          <div className='col-md-2 mb-1 d-flex justify-content-end '>
          <button
            type="button"
            className="btn btn-primary w-75"
            onClick={handleAddDepartment}
          >
            Add Department
          </button>
          </div>
          </div>
        </form>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Department</DialogTitle>
        <DialogContent>
        <Grid container spacing={2} style={{marginTop:'10px'}} >
        <Grid item   md={12}>
          <TextField
            label=" Department Name"
            name=" department name"
            
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
          />
          </Grid>
          <Grid item   md={12}>
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            fullWidth
          />
          </Grid>
         
          <Grid item xs={12}  md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveDepartment}
          >
            Save
          </Button>
          </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <table className="table table-striped  ">
          <thead className='sticky-top bg-light'>
            <tr>
              <th>ID</th>
              <th>Department Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>{department.description}</td>
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
                                                               <MenuItem >Delete</MenuItem>
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
      </div>
    </>
  );
}

export default DepartmentList;
