import React from 'react'
import "./MainSec.css"
import dot from '../../assets/dotted.svg'

function MainSec() {
  return (
    <div className='container main'>
        <div className='main-contents'>
          <img src={dot} className='dotted' height={150} />
            <div className='h2'>
                <p>Hey there!, I'm-</p>
                <h2>Kunal Ambarte.</h2>
                <h3><b>Software Engineer.</b> A self-taught developer with an </h3>
                <h3>interest in Computer Science.</h3>
            </div>
            <p className='extra'><i className="fa-solid fa-bolt"></i>  Currently specializing in <span>Full Stack Development</span>.</p>
            <div className='get-logos'>
              <a href="https://github.com/kunalambarte17" target='_main'>
              <button type="button" className="btn btn-secondary">
                <i className="fa-brands fa-github"></i> Github</button>
              </a>
              <a href="https://www.linkedin.com/in/kunal-ambarte-481059258" target='_main'>
              <button type="button" className="btn btn-secondary"><i className="fa-brands fa-linkedin"></i> Linkedin</button>
              </a>
              <a href="mailto:kunalambarte17@gmail.com" target='_main'>
              <button type="button" className="btn btn-secondary"><i className="fa-solid fa-envelope"></i> Email</button>
              </a>
            </div>
        </div>
    </div>
  )
}

export default MainSec
