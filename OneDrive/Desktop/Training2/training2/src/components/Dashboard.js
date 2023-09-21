import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";

function Dashboard() {

  
  
  return (
    <>
      <div className=" container-fluid ">
        <div className="row">
          <Sidebar/>
          <div className="col-md-8 m-3" >
              <div className="d-flex " >

                <div className=" " style={{width:'300px'}}>
                  <div className="d-block  p-4 text-center "style={{backgroundColor:'#9D76C1'}}>
                    <i className="fa fa-home " style={{fontSize: '60px', marginBottom: '15px', color: '#d2d2d2'}}></i>
                    <span className="d-block" style={{fontSize: '32px', fontWeight: '700', color: '#E5CFF7', lineHeight: '28px'}}>2147</span>
                    <p className="mt-1 mb-0" style={{ fontSize: '18px', fontWeight: '500'}}>Number of Companies</p>
                  </div>
                </div>

                <div className="  " style={{marginLeft:'100px', width:'300px'}}>
                  <div className="d-block  p-4 text-center "style={{backgroundColor:'#9D76C1'}}>
                    <i className="fa fa-group " style={{fontSize: '60px', marginBottom: '15px', color: '#d2d2d2'}}></i>
                    <span className="d-block" style={{fontSize: '32px', fontWeight: '700', color: '#E5CFF7', lineHeight: '28px'}}>3275</span>
                    <p className="mt-1 mb-0" style={{ fontSize: '18px', fontWeight: '500'}}>Number of Users</p>
                  </div>
                </div>

              </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Dashboard;
