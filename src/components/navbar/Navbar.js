import React from 'react'

import "./navbar.css"

const Navbar = () => {
  return (
     <div>
          <nav class="navbar navbar-expand-lg  nav-main ">
            <div class="container">
              <img  className="brand-img" src='./assets/Logo.jfif'/>
              <span class="navbar-brand" href="#">BytesFarms</span>

              {/* toggle button */}
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link list-view" aria-current="page" href="#">LogIn</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link list-view"  aria-current="page"href="#">SignUp</a>
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
            </div>
          </nav>

     </div>
            
  )
}

export default Navbar
