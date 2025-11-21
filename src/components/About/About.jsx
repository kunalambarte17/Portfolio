import React,{useEffect} from 'react'
import "./About.css"
// import avatar from "../../assets/avatar.webp"
import myPhoto from "../../assets/KunalA.jpg"

import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
    useEffect(()=> {
        AOS.init({
            duration: 1000,
            once: true,
            disable: 'mobile, tablet, phone'
        });
    }, [])
  return (
    <div className="container" data-aos="slide-up">
        <div className='main-box'>
            <div className='box1'>
                <h4><i className="fa-solid fa-bolt"></i> <b>About Me</b></h4>
                <div className='text'>
                    <p>I've been close to a computer since an early age, and been passionate about
                        it ever since.</p>
                    <p>I'm a visual learner and a self-taught developer with 2+ years of professional experience 
                        in turning ideas into projects. I primarily engage in front-end development using 
                        <span> React, Javascript</span> and like to explore & learn different things in my spare time.</p>
                    <p>I'm interested in building something awesome with code & automate tasks with code, currently 
                        focused on <span> Web Development, Open Source</span> and <span>Competitive Programming.</span></p>
                    <p>When I'm not coding I watch movies or play cricket with my friends! <i className="fa-solid fa-heart"></i></p>    
                </div>
            </div>

            <div className='box2'>
                    <img src={myPhoto} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
