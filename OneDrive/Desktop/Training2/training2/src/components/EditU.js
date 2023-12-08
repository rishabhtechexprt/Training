// import React from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import Button from '@mui/material/Button';
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// function EditD() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <td>
//         <li className="list-inline-item">
//           <button
//             variant="outlined"
//             onClick={handleClickOpen}
//             className="btn btn-success btn-sm-2 rounded-3 "
//             type="button"
//             title="Edit"
//           >
//             <i className="fa fa-edit"></i>
//           </button>
//         </li>
//         <li className="list-inline-item">
//           <button
//             className="btn btn-danger btn-sm-2 rounded-3"
//             type="button"
//             title="Delete"
//           >
//             <AiOutlineDelete />
//           </button>
//         </li>
//       </td>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle style={{fontSize:'30px',fontWeight:'600'}}>Edit a Company</DialogTitle>
//         <DialogContent>
          
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Company Name"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
          
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Location"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Address"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Phone No."
//             type="number"
//             fullWidth
//             variant="standard"
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="City "
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Country "
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} className="bg-dark text-white">Cancel</Button>
//           <Button onClick={handleClose} className="bg-dark text-white">Edit</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }
// export default EditD;


import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from 'axios';

function EditU() {
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    address: "",
    bloodGroup: "",
    company: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    // Make an API request to update the company information
    axios
      .put('http://localhost:3000/userlist', userData) // Replace with your actual API endpoint
      .then((response) => {
        console.log("user edited successfully");
        handleClose();
      })
      .catch((error) => {
        console.error("Error editing company:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <td>
        <li className="list-inline-item">
          <button
            variant="outlined"
            onClick={handleClickOpen}
            className="btn btn-success btn-sm-2 rounded-3"
            type="button"
            title="Edit"
          >
            <i className="fa fa-edit"></i>
          </button>
        </li>
        <li className="list-inline-item">
          <button
            className="btn btn-danger btn-sm-2 rounded-3"
            type="button"
            title="Delete"
          >
            <AiOutlineDelete />
          </button>
        </li>
      </td>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ fontSize: '30px', fontWeight: '600' }}>Edit a User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
         <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
            value={userData.email}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            value={userData.address}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="bloodGroup"
            label=" Blood Group"
            type="number"
            fullWidth
            variant="standard"
            value={userData.bloodGroup}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="company"
            label="Company "
            type="text"
            fullWidth
            variant="standard"
            value={userData.company}
            onChange={handleInputChange}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="bg-dark text-white">Cancel</Button>
          <Button onClick={handleEdit} className="bg-dark text-white">Edit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditU;
