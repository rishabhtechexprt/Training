import React from 'react'
import './Login.css'
const Login = () => {
  return (
    
  <div className='container-fluid main-div'>
    <form className='mx-auto loginform' >
   
            
            <h4 class="text-center title-login">Log In</h4>
            
                <div>
                    <label className='label-name'>UserName</label>
                    <input type="text" class="form-control mt-1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                </div>
                <div className='mt-2'>
                    <label className='label-name'>Password</label>
                    <input type="text" class="form-control mt-1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>
                </div>
                <div className='lowercaption mt-2'>
                    <p className='caption'>Forget Password?</p>
                </div>
                <div className='d-grid  mb-4'>
                <button class="logbutton" type="button">Log In</button>
                </div>
                <div className='lowercaption'>
                    <p >Don't have account?SignUp</p>
                </div>
      
    </form>
  </div>
  )
}

export default Login
