import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "username" && password === "password") {
      Navigate("/Dashboard");
    }
  };

  return (
    <div
      className=""
      style={{
        margin: "0",
        padding: "0",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center h-10 "
        style={{ marginTop: "300px" }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-secondary p-4 rounded shadow-sm text-center"
          style={{ width: "400px" }}
        >
          <h2 className="mb-4">LOGIN</h2>
          <div className="mb-4 ">
            <label
              className="d-block text-left mb-2 font-weight-bold"
              style={{ fontSize: "19px" }}
              for="username"
            >
              Username
            </label>
            <input
              className="form-control "
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRradius: "3px",
                fontSize: "16px",
              }}
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="d-block text-left mb-2 font-weight-bold"
              style={{ fontSize: "19px" }}
              for="password"
            >
              Password
            </label>
            <input
              className="form-control "
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRradius: "3px",
                fontSize: "16px",
              }}
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button  type='submit' className="btn btn-primary btn-block btn-lg">
            {/* <a href ='Dashboard' className="text-decoration-none text-light"> */}
              Login
              {/* </a> */}
              </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
