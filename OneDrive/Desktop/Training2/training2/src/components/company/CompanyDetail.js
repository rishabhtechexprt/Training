import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import AddCompany from "../AddCompany";
function CompanyDetail() {
  return (
    <div className=" row">
      <Sidebar />
      <div className="">
        

        <table
          className="table table-striped m-3 "
        >
          <thead>
            <tr>
              <th>S.No</th>

              <th>Company Name </th>

              <th>Company Detail</th>

              <th>Number of Users </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th rowSpan="3">1.</th>

              <td rowSpan="3">Bytesfarms</td>

              <td rowSpan="3">
                At BytesFarms, we strongly believe that everything in the modern
                world is digital.{" "}
              </td>

              <td>1.Priyanshi</td>
            </tr>

            <tr>
              <td>2.Adiya</td>
            </tr>

            <tr>
              <td>3.Chandan</td>
            </tr>

            <tr>
              <th rowSpan="3">2.</th>

              <td rowSpan="3">Bytesfarms</td>

              <td rowSpan="3">
                At BytesFarms, we strongly believe that everything in the modern
                world is digital.{" "}
              </td>

              <td>1.Priyanshi</td>
            </tr>

            <tr>
              <td>2.Adiya</td>
            </tr>

            <tr>
              <td>3.Chandan</td>
            </tr>

            <tr>
              <th rowSpan="3">3.</th>

              <td rowSpan="3">Bytesfarms</td>

              <td rowSpan="3">
                At BytesFarms, we strongly believe that everything in the modern
                world is digital.{" "}
              </td>

              <td>1.Priyanshi</td>
            </tr>

            <tr>
              <td>2.Adiya</td>
            </tr>

            <tr>
              <td>3.Chandan</td>
            </tr>

            <tr>
              <th rowSpan="3">4.</th>

              <td rowSpan="3">Bytesfarms</td>

              <td rowSpan="3">
                At BytesFarms, we strongly believe that everything in the modern
                world is digital.{" "}
              </td>

              <td>1.Priyanshi</td>
            </tr>

            <tr>
              <td>2.Adiya</td>
            </tr>

            <tr>
              <td>3.Chandan</td>
            </tr>

            <tr>
              <th rowSpan="3">5.</th>

              <td rowSpan="3">Bytesfarms</td>

              <td rowSpan="3">
                At BytesFarms, we strongly believe that everything in the modern
                world is digital.{" "}
              </td>

              <td>1.Priyanshi</td>
            </tr>

            <tr>
              <td>2.Adiya</td>
            </tr>

            <tr>
              <td>3.Chandan</td>
            </tr>
            <tr>
              <th rowSpan="3">6.</th>

              <td rowSpan="3">Bytesfarms</td>

              <td rowSpan="3">
                At BytesFarms, we strongly believe that everything in the modern
                world is digital.{" "}
              </td>

              <td>1.Priyanshi</td>
            </tr>

            <tr>
              <td>2.Adiya</td>
            </tr>

            <tr>
              <td>3.Chandan</td>
            </tr>
          </tbody>
        </table>
      </div>
     
    </div>
  );
}
export default CompanyDetail;
