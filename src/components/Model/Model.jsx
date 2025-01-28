import React from 'react'
import './Model.css'
import resume from '../../assets/resume.jpg'

function Model() {
  return (
    <>
      <div className='resume container'>
        <a className="btn btn-primary res-b" href='https://drive.google.com/file/d/1JmfhjKkCLPXajH9iKKATvDSh4Eo-lf1r/view?usp=sharing' target='_main'>
        <i className="fa-solid fa-download"></i> Resume
        </a>
        <div className='resume-img'>
          <img src={resume} alt="" />
        </div>
      </div>
    </>
  )
}

export default Model
