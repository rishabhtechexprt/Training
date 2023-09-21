import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import AddUser from "./AddUser";
import EditD from "../EditD";
function CompanyList() {
  return (
    <div className=" row">
      <Sidebar />
      <div className="">
        
        

        <table
          className="table table-striped m-4 "
          style={{ marginLeft: "50px" }}
        >
          <thead className="thead-dark">
            <tr className="">
              <th scope="">S.No</th>

              <th scope="col">Name</th>

              <th scope="col">Email</th>

              <th scope="col">Address</th>

              <th scope="col">ID</th>

              <th scope="col">Blood Group</th>

              <th scope="col">Company</th>
              <th><AddUser/></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td scope="">1.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
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
                  Priyanshi
                </Link>
              </td>
              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
                <li className="list-inline-item">
                  <button
                    className="btn btn-success btn-sm-2 rounded-3 "
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
            </tr>

            <tr>
              <td scope="">3.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
              <EditD/>
              </td>
            </tr>

            <tr>
              <td scope="">4.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
              <EditD/>
              </td>
            </tr>

            <tr>
              <td scope="">5.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
              <EditD/>
              </td>
            </tr>

            <tr>
              <td scope="">6.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
              <EditD/>
              </td>
            </tr>

            <tr>
              <td scope="">7.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
              <EditD/>
              </td>
            </tr>

            <tr>
              <td scope="">8.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
              <EditD/>
              </td>
            </tr>

            <tr>
              <td scope="">9.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
              <EditD/>
              </td>
            </tr>

            <tr>
              <td scope="">10.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
              <EditD/>
              </td>
            </tr>

            <tr>
              <td scope="">11.</td>

              <td className="text-decoration-none">
                <Link
                  to="/CompanyDetail"
                  className="text-decoration-none text-dark"
                >
                  Priyanshi
                </Link>
              </td>

              <td scope="col">priyanshi@gmail.com</td>

              <td scope="col">Ujjain</td>

              <td scope="col">9903</td>

              <td scope="col">A+</td>

              <td scope="col">Bytesfarms</td>
              <td>
               <EditD/>
              </td>
            </tr>

            
          </tbody>
        </table>
      </div>
     
    </div>
  );
}
export default CompanyList;
