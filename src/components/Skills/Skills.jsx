import React, {useEffect} from 'react'
import './Skills.css'
import boot from '../../assets/skills/boot.png'
import css from '../../assets/skills/css.png'
import express from '../../assets/skills/express.png'
import figma from '../../assets/skills/figma.png'
import git from '../../assets/skills/git.png'
import github from '../../assets/skills/github.svg'
import html from '../../assets/skills/html.png'
import js from '../../assets/skills/js.png'
import materialUi from '../../assets/skills/materialUi.png'
import mongo from '../../assets/skills/mongo.png'
import nextjs1 from '../../assets/skills/next.svg'
import node from '../../assets/skills/node.svg'
import npm from '../../assets/skills/npm.svg'
import nvim from '../../assets/skills/nvim.svg'
import react from '../../assets/skills/react.png'
import sql from '../../assets/skills/sql.png'
import vite from '../../assets/skills/vite.png'
import vscode from '../../assets/skills/vscode.png'
import tailwind from '../../assets/skills/tailwind.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(()=> {
    AOS.init({duration: 1000, once: true});
  }, [])
  return (
    <div id='skills' className='skills' data-aos="slide-up">
      <div className="skill-heading">
        <h1>Skills</h1>
      </div>
      <div className="skill-container">
        <div className="skill-tech-name">
          <h3 className='skill-tech-heading'>Frontend</h3>
          <ul className="skill-list">
            <li className='skill-list-li'>
              <div className="skill-img-div react bg-[#007acc26]">
                <img src={react} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>React</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div js bg-[#f0db4f26]">
                <img src={js} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Javascript</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div html bg-[#dd4b2526]">
                <img src={html} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>HTML</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div css bg-[#264de426]">
                <img src={css} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>CSS</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div tail bg-[#44a8b326]">
                <img src={tailwind} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Tailwind</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div boot bg-[#6d10f426]">
                <img src={boot} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Bootstrap</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div material bg-[#7ebae226]">
                <img src={materialUi} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Material UI</span>
            </li>
          </ul>
        </div>
        <div className="skill-tech-name mt-[3rem]">
          <h3 className='skill-tech-heading'>Backend</h3>
          <ul className="skill-list">
            <li className='skill-list-li'>
              <div className="skill-img-div node bg-[#6fa66026]">
                <img src={node} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Node.js</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div express bg-[#6fa66026]">
                <img src={express} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Express</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div mongo bg-[#6fa66026]">
                <img src={mongo} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>MongoDb</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div sql bg-[#3bbdb314]">
                <img src={sql} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>MySQL</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div next bg-[#ffffff14]">
                <img src={nextjs1} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Next.js</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div vite bg-[#6e97fe26]">
                <img src={vite} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Vite</span>
            </li>
          </ul>
        </div>
        <div className="skill-tech-name mt-[3rem]">
          <h3 className='skill-tech-heading'>Tools</h3>
          <ul className="skill-list">
            <li className='skill-list-li'>
              <div className="skill-img-div vs bg-[#33abe326]">
                <img src={vscode} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>VScode</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div nvim bg-[#55e53926]">
                <img src={nvim} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Nvim</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div git bg-[#e671711f]">
                <img src={git} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Git</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div hub bg-[#ffffff14] ">
                <img src={github} alt="" className='skill-img ' />
              </div>
              <span className='skill-name'>Github</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div npm bg-[#cc000026]">
                <img src={npm} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>npm</span>
            </li>
            <li className='skill-list-li'>
              <div className="skill-img-div figma bg-[#ffffff14]">
                <img src={figma} alt="" className='skill-img' />
              </div>
              <span className='skill-name'>Figma</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills