import { useTypewriter, Cursor } from 'react-simple-typewriter'
import React,{useEffect} from 'react'
import "./MainSec.css"
import dot from '../../assets/dotted.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'

function MainSec() {

  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Programmer', 'Software Engineer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  useEffect(()=> {
      AOS.init({duration: 3000, once: true, disable: 'mobile, tablet, phone'});
    }, [])

  return (
    <div className='container main' data-aos="fade">
        <div className='main-contents'>
          <img src={dot} className='dotted' height={150} />
            <div className='h2'>
                <p>Hey there!, I'm-</p>
                <h2>Kunal Ambarte.</h2>
                <h3><b>Software Engineer.</b> A self-taught developer with an </h3>
                <h3>interest in Computer Science.</h3>
            </div>
            <p className='extra'><i className="fa-solid fa-bolt"></i>  Currently specializing in 
                  <span> {text}</span>
                  <span><Cursor/></span>
            </p>
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
