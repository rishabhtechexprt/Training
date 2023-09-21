import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import AddCompany from "../AddCompany";
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import EditD from "../EditD";
function CompanyList() {



  return (
    <div className=" row">
      <Sidebar />
      <div className="">
        {/* <h2 className=" text-center mt-3 bg-muted">Company List</h2> */}
      

        <table
          className="table  table-striped  m-3 "
          style={{ marginLeft: "50px" }}
        >
          <thead className="">
            <tr className="">
              <th scope="">S.No</th>
              <th scope="col">Company Name</th>
              <th scope="col">Location</th>
              <th scope="col">Address</th>
              <th scope="col">Phone NO.</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Create Date</th>
              <th><AddCompany/></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >1.</td>
              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Bytesfarms
                </Link>
              </td>

              <td>Indore</td>
              <td>Vijay Nagar</td>
              <td>99XXXXXX03</td>
              <td>Indore</td>
              <td>India</td>
              <td>12/02/XX</td>
              <td >
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">2.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Bytesfarms
                </Link>
              </td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">3.</td>
              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Bytesfarms
                </Link>
              </td>
              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">4.</td>

              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">5.</td>

              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">6.</td>

              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">7.</td>

              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">8.</td>
              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">9.</td>

              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">10.</td>

              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">11.</td>

              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">12.</td>

              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
            <tr>
              <td scope="">13.</td>

              <td scope="col">Bytesfarms</td>

              <td scope="col">Indore</td>
              <td scope="col">Vijay Nagar</td>
              <td scope="col">99XXXXXX03</td>
              <td scope="col">Indore</td>
              <td scope="col">India</td>
              <td scope="col">12/02/XX</td>
              <td>
              <EditD/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
export default CompanyList;
