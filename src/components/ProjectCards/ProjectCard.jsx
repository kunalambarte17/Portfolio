import React from 'react'
import "./ProjectCard.css"
import Anime from '../../assets/Pro_Img/Anime.png'
import Auto from '../../assets/Pro_Img/Auto.png'
import Food from '../../assets/Pro_Img/Food.png'
import Villa from '../../assets/Pro_Img/Villa.png'
import Rest from '../../assets/Pro_Img/Rest.png'

function ProjectCard() {
  return (
    <div className=''>
        <div className='info'>
        <h2 className='title'>Projects</h2>
        <p className='text'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</p>
        </div>
        <div className='card-container container'>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Food} alt="" />
                </div>
                <div className='contain'>
                    <h5 className="c-title">Tomato</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' className="btn r-btn"><i className="fa-brands fa-react"></i> React</button>
                     <button property='button' className="btn j-btn"><i className="fa-brands fa-js"></i> Javascript</button>
                    </div>
                    <p className="c-text">This Site is used to order food.</p>
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
                     <button property='button' className="btn e-btn"><i className="fa-brands fa-node-js"></i> Ejs</button>
                     <button property='button' className="btn j-btn"><i className="fa-brands fa-js"></i> Javascript</button>
                    </div>
                    <p className="c-text">This site is used to book a villa or user can add there own.</p>
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
                     <button property='button' className="btn r-btn"><i className="fa-brands fa-react"></i> React</button>
                     <button property='button' className="btn j-btn"><i className="fa-brands fa-js"></i> Javascript</button>
                    </div>
                    <p className="c-text">This site is used to buy and sell the Car. User can also give car on rent.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/AutoBots" className="btn btn-primary">Get Code <i className="fa-solid fa-code"></i></a>
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
                     <button property='button' className="btn r-btn"><i className="fa-brands fa-css3"></i> Tailwind</button>
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
                     <button property='button' className="btn r-btn"><i className="fa-brands fa-css3"></i> Tailwind</button>
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
