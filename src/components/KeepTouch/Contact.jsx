import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='container in-touch'>
      <h2>Keep In Touch.</h2>
      <p>I'm currently specializing in<span> Full Stack Development.</span><br />
        feel free to get in touch and talk more about your projects.</p>
        <div className='get-logos'>
              <a href="https://github.com/kunalambarte17" target='_main'>
              <button type="button" className="btn btn-secondary">
                <i className="fa-brands fa-github"></i>Github</button>
              </a>
              <a href="https://www.linkedin.com/in/kunal-ambarte-481059258" target='_main'>
              <button type="button" className="btn btn-secondary"><i className="fa-brands fa-linkedin"></i>Linkedin</button>
              </a>
              <a href="mailto:kunalambarte17@gmail.com" target='_main'>
              <button type="button" className="btn btn-secondary"><i className="fa-solid fa-envelope"></i>Email</button>
              </a>
        </div>
    </div>
  )
}
8
export default Contact
