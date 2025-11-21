import React, { useEffect } from 'react'
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
import postgre from '../../assets/skills/postgre.svg'
import socket from '../../assets/skills/socket.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false, disable: 'mobile, tablet, phone' });
  }, []);

  // Rows of skills (7 items each for smooth duplication)
  const row1 = [
    { img: react, name: "React", cls: "react" },
    { img: js, name: "Javascript", cls: "js" },
    { img: html, name: "HTML", cls: "html" },
    { img: css, name: "CSS", cls: "css" },
    { img: tailwind, name: "Tailwind", cls: "tail" },
    { img: nextjs1, name: "Next.js", cls: "next" },
    { img: git, name: "Git", cls: "git" },
  ];

  const row2 = [
    { img: node, name: "Node.js", cls: "node" },
    { img: express, name: "Express", cls: "express" },
    { img: mongo, name: "MongoDB", cls: "mongo" },
    { img: sql, name: "MySQL", cls: "sql" },
    { img: postgre, name: "PostgreSQL", cls: "tail" },
    { img: socket, name: "Socket.io", cls: "next" },
    { img: vite, name: "Vite", cls: "vite" },
  ];

  const row3 = [
    { img: vscode, name: "VScode", cls: "vs" },
    { img: nvim, name: "Nvim", cls: "nvim" },
    { img: github, name: "Github", cls: "hub" },
    { img: npm, name: "npm", cls: "npm" },
    { img: materialUi, name: "Material UI", cls: "material" },
    { img: figma, name: "Figma", cls: "figma" },
    { img: boot, name: "Bootstrap", cls: "boot" },
  ];

  // Renders a band. direction: 'left' | 'right'. duration optional (seconds).
  const renderBand = (skills, direction = 'left', duration = 18) => {
    const className = direction === 'right' ? 'scroll-right' : 'scroll-left'
    // pass duration as inline style variable so we can easily tweak per-row if desired.
    const style = { ['--scroll-duration']: `${duration}s` }
    return (
      <div className="infinite-scroll" style={{ margin: '1.25rem 0' }}>
        <ul className={`skill-list ${className}`} style={style}>
          {skills.map((s, i) => (
            <li className="skill-list-li" key={i}>
              <div className={`skill-img-div ${s.cls}`}>
                <img src={s.img} alt={s.name} className="skill-img" />
              </div>
              <span className="skill-name">{s.name}</span>
            </li>
          ))}
          {/* duplicate for seamless loop */}
          {skills.map((s, i) => (
            <li className="skill-list-li" key={'dup-' + i}>
              <div className={`skill-img-div ${s.cls}`}>
                <img src={s.img} alt={s.name} className="skill-img" />
              </div>
              <span className="skill-name">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="skills" className="skills" data-aos="fade-zoom-in">
      <div className="skill-heading">
        <h1>Skills</h1>
      </div>

      <div className="skill-container no-titles">
        {renderBand(row1, 'left', 18)}
        {renderBand(row2, 'right', 20)} {/* middle row slightly slower */}
        {renderBand(row3, 'left', 16)}  {/* bottom row slightly faster */}
      </div>
    </div>
  );
};

export default Skills;
