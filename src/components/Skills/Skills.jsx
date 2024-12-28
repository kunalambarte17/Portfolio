import React from 'react'
import "./Skills.css"
import boot from "../../assets/Skill_Logos/bootstrap-icon.svg"
import css from "../../assets/Skill_Logos/css-icon.svg"
import express from "../../assets/Skill_Logos/express-js-icon.svg"
import git from "../../assets/Skill_Logos/git-icon.svg"
import github from "../../assets/Skill_Logos/github-icon.svg"
import html from "../../assets/Skill_Logos/html-icon.svg"
import js from "../../assets/Skill_Logos/js-icon.svg"
import mongo from "../../assets/Skill_Logos/mongodb-icon.svg"
import mysql from "../../assets/Skill_Logos/mysql-icon.svg"
import node from "../../assets/Skill_Logos/node-js-icon.svg"
import npm from "../../assets/Skill_Logos/npm-icon.svg"
import post from "../../assets/Skill_Logos/postgresql-icon.svg"
import react from "../../assets/Skill_Logos/react-js-icon.svg"
import socket from "../../assets/Skill_Logos/socketicon.svg"
import tailwind from "../../assets/Skill_Logos/tailwind-css-icon.svg"
import vscode from "../../assets/Skill_Logos/vscode-icon.svg"


function Skills() {
  // return (
  //   <div className='skill'>
  //     <h2 className='mb-3'>My Skills</h2>
  //     <div className='container'>
  //       <h4>Frontend</h4>
  //       <div className='container skill-contain1'>
  //         <button type="button" className="btn btn-secondary"><img src={html} height={50} /></button>
  //         <button type="button" className="btn btn-secondary"><img src={css}  height={50}/></button>
  //         <button type="button" className="btn btn-secondary"><img src={boot} height={50} /></button>
  //         <button type="button" className="btn btn-secondary"><img src={react} height={50}/></button>
  //         <button type="button" className="btn btn-secondary"><img src={tail} height={50} /></button>
  //       </div>
  //     </div>
  //     <div className='container'>
  //       <h4>Backend</h4>
  //       <div className='container skill-contain1'>
  //         <button type="button" className="btn btn-secondary"><img src={node} height={50} /></button>
  //         <button type="button" className="btn btn-secondary"><img src={express}  height={50}/></button>
  //         <button type="button" className="btn btn-secondary"><img src={java} height={50} /></button>
  //       </div>
  //     </div>
  //     <div className='container'>
  //       <h4>Development Tools</h4>
  //       <div className='container skill-contain1'>
  //         <button type="button" className="btn btn-secondary"><img src={node} height={50} /></button>
  //         <button type="button" className="btn btn-secondary"><img src={express}  height={50}/></button>
  //         <button type="button" className="btn btn-secondary"><img src={java} height={50} /></button>
  //       </div>
  //     </div>
  //   </div>
  // )
  return(
    <div className='container'>
      <h2 className='skill-title'>My Skills</h2>
      <div className="box-container">
        <div className='box'>
          <div className="mini-box" id='html'>
            <img src={html} className='s-logo' />
            <h2 className='l-title'>Html</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='css'>
            <img src={css} className='s-logo' />
            <h2 className='l-title'>Css</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='js'>
            <img src={js} className='s-logo' />
            <h2 className='l-title'>JavaScript</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='react'>
            <img src={react} className='s-logo' />
            <h2 className='l-title'>React</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='boot'>
            <img src={boot} className='s-logo' />
            <h2 className='l-title'>Bootstrap</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='tail'>
            <img src={tailwind} className='s-logo' />
            <h2 className='l-title'>Tailwind</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='node'>
            <img src={node} className='s-logo' />
            <h2 className='l-title'>Nodejs</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='express'>
            <img src={express} className='s-logo' />
            <h2 className='l-title'>Expressjs</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='socket'>
            <img src={socket} className='s-logo' />
            <h2 className='l-title'>Socket.io</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='npm'>
            <img src={npm} className='s-logo' />
            <h2 className='l-title'>Npm</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='mysql'>
            <img src={mysql} className='s-logo' />
            <h2 className='l-title'>MySql</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='mongo'>
            <img src={mongo} className='m-logo' />
            <h2 className='m-title'>MongoDB</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='post'>
            <img src={post} className='s-logo' />
            <h2 className='l-title'>Postgre</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='git'>
            <img src={git} className='s-logo' />
            <h2 className='l-title'>Git</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='github'>
            <img src={github} className='s-logo' />
            <h2 className='l-title'>Github</h2>
          </div>
        </div>
        <div className='box'>
          <div className="mini-box" id='vscode'>
            <img src={vscode} className='s-logo' />
            <h2 className='l-title'>Vscode</h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills
