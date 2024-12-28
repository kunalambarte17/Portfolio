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
        <div className="list-contain">
          <div className='offcanvas-body'>
            <ul className="list-item">
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
