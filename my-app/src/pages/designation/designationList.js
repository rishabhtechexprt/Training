import React, { useState } from 'react';
import Navbar from '../components/navbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tracker from '../components/tracker';
import Breadindication3 from '../components/breadcrumbs3';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

function DesignationList() {
  const [Designations, setDesignation] = useState([
    { id: 1, name: 'Developer', description: 'Information Technology' },
    { id: 2, name: 'Salesforce', description: 'Sales and admin' },
    { id: 3, name: 'Finance', description: 'Finance and Accounting' },
    { id: 4, name: 'Salesforce', description: 'Sales and admin' },
    { id: 5, name: 'Salesforce', description: 'Sales and admin' },
    { id: 6, name: 'Salesforce', description: 'Sales and admin' },
    { id: 7, name: 'Salesforce', description: 'Sales and admin' },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editing, setEditingDesignation] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDesignation = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleSaveDesignation = () => {
    
    setDesignation([...Designations, formData]);
    setOpenDialog(false);
  };     

  const deleteDesignation = (id) => {
    setDesignation(Designations.filter((designation) => designation.id !== id));
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
      <Breadindication3 />
      <div className="px-2 py-2">
        <Tracker/>
        
        <form>
            <div className='row align-items-end justify-content-end px-3'>
          
          <div className='col-md-2 mb-1 d-flex justify-content-end '>
          <button
            type="button"
            className="btn btn-primary w-75"
            onClick={handleAddDesignation}
          >
            Add Designation
          </button>
          </div>
          </div>
        </form>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Designation</DialogTitle>
        <DialogContent>
        <Grid container spacing={2} style={{marginTop:'10px'}} >
        <Grid item   md={12}>
          <TextField
            label=" Designation Name"
            name=" Designation name"
            
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
            onClick={handleSaveDesignation}
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
        <table className="table table-striped ">
          <thead className='sticky-top bg-light'>
            <tr>
              <th>ID</th>
              <th>Designation Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Designations.map((designation) => (
              <tr key={designation.id}>
                <td>{designation.id}</td>
                <td>{designation.name}</td>
                <td>{designation.description}</td>
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

export default DesignationList;