import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/logoo.png"

function Navbar() {
  return (
    <>
      <div className='navbar navbar-expand-md fixed-top'>
        <div className="logo">
          <Link to={'/'}>
           <img src={logo} />
          </Link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="list-contain offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
          <div className='offcanvas-body'>
            <ul className="list-item navbar-nav">
              <Link to={'/'} className='li'>
                <li className='nav-item'>Home</li>
              </Link>
              <Link to={'/project'} className='li'>
                <li className='nav-item'>Project</li>
              </Link>
              <Link to={'/resume'} className='li'>
                <li className='nav-item'>Resume</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
