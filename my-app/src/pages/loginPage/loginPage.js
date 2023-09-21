
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate =  useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const handleLogin = () => {
  
    if (username === 'admin' && password === 'password') {
        navigate('/dashboard'); 
    }
    else{
      toast.error('Invalid username and password', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        });
    }
  };


  return (
    <>
  
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundImage: 'url("assets/DIGITAL-HUMAN-RESOURCE-MANAGEMENT.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
 
  

    <div className="container w-25 border py-3 px-3 h-50" style={{backgroundColor:'white',borderRadius:'10px'}}>
      <div className='d-flex justify-content-center'>
      <img src='./assets/bytesfarms.jfif'
   
   style={{width:'65px',height:'65px'}}
   alt='company name' />
      </div>
     
      <h2 className='d-flex justify-content-center fw-bold'> Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label fw-bold">
            Username
          </label>
          <input
            type="text"
            placeholder='Enter Username...'
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="password" className="form-label fw-bold">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter Password...'
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
          />
         
        </div>
        <button type="button" className="btn btn-primary w-100 " onClick={handleLogin}>
          Submit
        </button>
        <p className='d-flex justify-content-center' >Don't have any account?</p>
      </form>
    </div>
    <ToastContainer/>
  </div>
  
  </>
  );
}

export default Login;
