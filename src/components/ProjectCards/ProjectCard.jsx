import React,{useEffect} from 'react'
import "./ProjectCard.css"
import Anime from '../../assets/Pro_Img/Anime.png'
import Auto from '../../assets/Pro_Img/Auto.png'
import Food from '../../assets/Pro_Img/Food.png'
import Villa from '../../assets/Pro_Img/Villa.png'
import Rest from '../../assets/Pro_Img/Rest.png'
import Chat from '../../assets/Pro_Img/Chat.png'
import Weather from '../../assets/Pro_Img/Weather.png'

import boot from '../../assets/skills/boot.png'
import css from '../../assets/skills/css.png'
import express from '../../assets/skills/express.png'
import html from '../../assets/skills/html.png'
import js from '../../assets/skills/js.png'
import mongo from '../../assets/skills/mongo.png'
import node from '../../assets/skills/node.svg'
import npm from '../../assets/skills/npm.svg'
import react from '../../assets/skills/react.png'
import sql from '../../assets/skills/sql.png'
import vite from '../../assets/skills/vite.png'
import socket from '../../assets/skills/socket.svg'


import AOS from 'aos'
import 'aos/dist/aos.css'

function ProjectCard() {
  useEffect(()=> {
    AOS.init({duration: 1000, once: true});
  }, [])

  return (
    <div className='ProjectCard-block'>
        <div className='info'>
        <h2 className='title'>Projects</h2>
        <p className='text'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</p>
        </div>
        <div className='card-container container' data-aos="zoom-in-up">
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Food} alt="" />
                </div>
                <div className='contain'>
                    <h5 className="c-title">Tomato</h5>
                    <div className='btn-pair d-flex'>
                        <div className="skill-img-div react bg-[#007acc26]">
                            <img src={react} alt="" className='skill-img' />
                        </div>
                        <div className="skill-img-div js bg-[#f0db4f26]">
                            <img src={js} alt="" className='skill-img' />
                        </div>  
                        <div className="skill-img-div boot bg-[#6d10f426]">
                            <img src={boot} alt="" className='skill-img' />
                        </div>  
                        <div className="skill-img-div vite bg-[#6e97fe26]">
                            <img src={vite} alt="" className='skill-img' />
                        </div>  
                        <div className="skill-img-div npm bg-[#cc000026]">
                            <img src={npm} alt="" className='skill-img' />
                        </div>               
                    </div>
                    <p className="c-text">This Site is used to order food. User can add items as many as they want. Can Check it in cart.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/Tomato" className="btn btn-primary">Get Code <i className="fa-solid fa-code"></i></a>
                        <a href="https://tomato-yum.vercel.app/" className="btn btn-primary">Visit <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Villa} alt="" />
                </div>
                <div className='contain'>
                    <h5 className="c-title">WanderVillas</h5>
                    <div className='btn-pair d-flex'>
                        <div className="skill-img-div node bg-[#6fa66026]">
                          <img src={node} alt="" className='skill-img' />
                        </div>
                        <div className="skill-img-div express bg-[#6fa66026]">
                           <img src={express} alt="" className='skill-img' />
                        </div>            
                        <div className="skill-img-div js bg-[#f0db4f26]">
                          <img src={js} alt="" className='skill-img' />
                        </div>
                        <div className="skill-img-div boot bg-[#6d10f426]">
                        <img src={boot} alt="" className='skill-img' />
                        </div> 
                        <div className="skill-img-div mongo bg-[#6fa66026]">
                           <img src={mongo} alt="" className='skill-img' />
                        </div>
                        <div className="skill-img-div npm bg-[#cc000026]">
                           <img src={npm} alt="" className='skill-img' />
                        </div>
                    </div>
                    <p className="c-text">This site is used to book a villa and User can share there own listings for other users.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/WanderVillas" className="btn btn-primary">Get Code <i className="fa-solid fa-code"></i></a>
                        <a href="https://travelbroad.onrender.com/listings" className="btn btn-primary">Vist <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Auto} alt="" />
                </div>
                <div className='contain'>
                    <h5 className="c-title">AutoBots</h5>
                    <div className='btn-pair d-flex'>
                      <div className="skill-img-div react bg-[#007acc26]">
                        <img src={react} alt="" className='skill-img' />
                      </div>
                      <div className="skill-img-div js bg-[#f0db4f26]">
                        <img src={js} alt="" className='skill-img' />
                      </div>
                      <div className="skill-img-div boot bg-[#6d10f426]">
                        <img src={boot} alt="" className='skill-img' />
                      </div>
                      <div className="skill-img-div vite bg-[#6e97fe26]">
                        <img src={vite} alt="" className='skill-img' />
                      </div> 
                      <div className="skill-img-div sql bg-[#3bbdb314]">
                        <img src={sql} alt="" className='skill-img' />
                      </div> 
                      <div className="skill-img-div npm bg-[#cc000026]">
                        <img src={npm} alt="" className='skill-img' />
                      </div>            
                    </div>
                    <p className="c-text">This site is used to buy and sell the Car. User can also give car on rent.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/AutoBots" className="btn btn-primary">Get Code <i className="fa-solid fa-code"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top special-img">
                    <img src={Chat} alt="" />
                </div>
                <div className='contain'>
                    <h5 className="c-title">ChatBot</h5>
                    <div className='btn-pair d-flex'>
                      <div className="skill-img-div react bg-[#007acc26]">
                        <img src={react} alt="" className='skill-img' />
                      </div>
                      <div className="skill-img-div js bg-[#f0db4f26]">
                        <img src={js} alt="" className='skill-img' />
                      </div>
                      <div className="skill-img-div vite bg-[#6e97fe26]">
                        <img src={vite} alt="" className='skill-img' />
                      </div> 
                      <div className="skill-img-div npm bg-[#cc000026]">
                        <img src={npm} alt="" className='skill-img' />
                      </div>  
                      <div className="skill-img-div next bg-[#cc000026]">
                        <img src={socket} alt="" className='skill-img' />
                      </div>           
                    </div>
                    <p className="c-text">This is realtime chat application used to chat with users. Many users can join a room at time.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/RealTime_ChatBot" className="btn btn-primary">Get Code <i className="fa-solid fa-code"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top special-img">
                    <img src={Weather} alt="" />
                </div>
                <div className='contain'>
                    <h5 className="c-title">ChatBot</h5>
                    <div className='btn-pair d-flex'>
                      <div className="skill-img-div react bg-[#007acc26]">
                        <img src={react} alt="" className='skill-img' />
                      </div>
                      <div className="skill-img-div js bg-[#f0db4f26]">
                        <img src={js} alt="" className='skill-img' />
                      </div>
                      <div className="skill-img-div vite bg-[#6e97fe26]">
                        <img src={vite} alt="" className='skill-img' />
                      </div>  
                      <div className="skill-img-div css bg-[#264de426]">
                        <img src={css} alt="" className='skill-img' />
                      </div>           
                    </div>
                    <p className="c-text">This is Weather Application. You can check the weather of any location you want.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/Weather_WebApp" className="btn btn-primary">Get Code <i className="fa-solid fa-code"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Rest} alt="" />
                </div>
                <div className='contain'>
                    <h5 className="c-title">Restaurant Website</h5>
                    <div className='btn-pair d-flex'>
                      <div className="skill-img-div html bg-[#dd4b2526]">
                        <img src={html} alt="" className='skill-img' />
                      </div>
                      <div className="skill-img-div boot bg-[#6d10f426]">
                        <img src={boot} alt="" className='skill-img' />
                      </div>     
                      <div className="skill-img-div css bg-[#264de426]">
                        <img src={css} alt="" className='skill-img' />
                      </div>                      
                    </div>
                    <p className="c-text">This is just webpage of the Restaurant as such there is no functionalities.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/Restaurant_WebSite" className="btn btn-primary">Get Code <i className="fa-solid fa-code"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Anime} alt="" />
                </div>
                <div className='contain'>
                <h5 className="c-title">Anime Website</h5>
                    <div className='btn-pair d-flex'>
                      <div className="skill-img-div html bg-[#dd4b2526]">
                        <img src={html} alt="" className='skill-img' />
                      </div>  
                      <div className="skill-img-div boot bg-[#6d10f426]">
                        <img src={boot} alt="" className='skill-img' />
                      </div>    
                      <div className="skill-img-div css bg-[#264de426]">
                        <img src={css} alt="" className='skill-img' />
                      </div>   
                    </div>
                    <p className="c-text">This is just webpage of the Anime as such there is no functionalities.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/Anime-Site" className="btn btn-primary">Get Code <i className="fa-solid fa-code"></i></a>
                        <a href="https://anime-site-indol.vercel.app/" className="btn btn-primary">Visit <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

  )
}

export default ProjectCard
