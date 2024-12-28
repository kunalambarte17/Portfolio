import React from 'react'
import './Model.css'
import resume from '../../assets/Resume.png'

function Model() {
  return (
    <>
      <div className='resume container'>
        <a className="btn btn-primary res-b" href='https://drive.google.com/file/d/10J6sxAYW00MHtX0j--yTdigQy3DZPO1k/view?usp=drive_link' target='_main'>
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
