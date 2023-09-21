import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
function AddUser() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container">
      <button
        variant="outlined"
        onClick={handleClickOpen}
        id="addbutton"
        className="btn btn-primary btn-sm-3 rounded-3  "
        type="button"
        title="Add"
      >
        {/* <i className="fa fa-table"></i> */}
        Add
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ fontSize: "30px", fontWeight: "600" }}>
          Add User
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="Email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Company"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ID"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Blood Group"
            type="text"
            fullWidth
            variant="standard"
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="bg-dark text-white">
            Cancel
          </Button>
          <Button onClick={handleClose} className="bg-dark text-white">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddUser;
