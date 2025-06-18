import React from 'react'
import './Model.css'
import resume from '../../assets/resume.jpg'

function Model() {
  return (
    <>
      <div className='resume container'>
        <a className="btn btn-primary res-b" href='https://drive.google.com/file/d/1_j2z2_9XCARpYl9aytQrTLSpFjBOSdQx/view?usp=drivesdk' target='_main'>
        <i className="fa-solid fa-download"></i> Resume
        </a>
        <div className='resume-img'>
          <img src={resume} alt="" />
        </div>
        <a className="btn btn-primary res-b" href='https://drive.google.com/file/d/1_j2z2_9XCARpYl9aytQrTLSpFjBOSdQx/view?usp=drivesdk' target='_main'>
        <i className="fa-solid fa-download"></i> Resume
        </a>
      </div>
    </>
  )
}

export default Model
