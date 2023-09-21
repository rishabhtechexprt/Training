import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="navbar navbar-dark bg-dark text-white">
      
        <nav class="navbar navbar-brand text-white ">
          <img
            src="pr.png"
            width="30"
            height="40"
            alt=""
            style={{ marginLeft: "20px" }}
          />
          <span className="text-white m-4"><Link to='/Dashboard' className="text-decoration-none text-white">Dashboard</Link></span>
        

        <div className="navbar">
          <div className="navbar m-3"><Link to='/CompanyList' className="text-decoration-none text-white">Company list</Link></div>
          {/* <div className="m-3"><Link to='/CompanyDetail' className="text-decoration-none text-white">Company Detail</Link></div> */}

          <div className="m-3"><Link to='/UserList' className="text-decoration-none text-white">User list</Link></div>
        </div>
        </nav>
        <div className="navbar-brand m-3 p-3"><Link to='/' className="text-decoration-none text-white">Logout</Link></div>
      </div>
    
  );
}
export default Sidebar;
