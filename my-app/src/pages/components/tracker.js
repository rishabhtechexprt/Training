import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { InfoCircleFill } from 'react-bootstrap-icons';

function Tracker() {
  const employeeList = 10; // Replace with your actual data
  const statusActive = 8; // Replace with your actual data
  const statusInactive = 2; // Replace with your actual data

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className=" col-md-4 mb-4">
          <div className="border p-3 border-bottom-dashes border-2  border-dark-subtle">
            <h5 className="font-weight-bold">Total Employee</h5>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h4>{employeeList}</h4>
              </div>
              <div>
                <Tooltip title="Total Employee on the platform">
                  <InfoCircleFill className="text-lightgray" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 mb-4">
          <div className="border p-3 border-bottom-dashes border-2  border-dark-subtle">
            <h5 className="font-weight-bold">Active Employee</h5>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h4>{statusActive}</h4>
              </div>
              <div>
                <Tooltip title="Active Employee on the platform">
                  <InfoCircleFill className="text-lightgray" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 mb-4">
          <div className="border p-3 border-bottom-dashes border-2  border-dark-subtle">
            <h5 className="font-weight-bold">In-Active Employee</h5>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <h4>{statusInactive}</h4>
              </div>
              <div>
                <Tooltip title="In-Active Employee on the platform">
                  <InfoCircleFill className="text-lightgray" />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
