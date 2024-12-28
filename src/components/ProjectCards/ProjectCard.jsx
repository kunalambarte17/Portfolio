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
        {/* <div className="card-container container">
            <div className='card-box'>
                <div class="card">
                <img src={Food} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Tomato</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn r-btn"><i class="fa-brands fa-react"></i> React</button>
                     <button property='button' class="btn j-btn"><i class="fa-brands fa-js"></i> Javascript</button>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair'>
                        <a href="https://github.com/kunalambarte17/Tomato" class="btn btn-outline-success">Get Code <i class="fa-solid fa-code"></i></a>
                        <a href="https://tomato-yum.vercel.app/" class="btn btn-outline-success">Visit <i class="fa-regular fa-paper-plane"></i></a>
                    </div>
                </div>
                </div>
            </div>
            <div className='card-box'>
                <div class="card">
                <img src={Villa} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">WanderVillas</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn e-btn"><i class="fa-brands fa-node-js"></i> Ejs</button>
                     <button property='button' class="btn j-btn"><i class="fa-brands fa-js"></i> Javascript</button>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair'>
                        <a href="https://github.com/kunalambarte17/WanderVillas" class="btn btn-outline-success">Get Code <i class="fa-solid fa-code"></i></a>
                        <a href="https://travelbroad.onrender.com/listings" class="btn btn-outline-success">Vist <i class="fa-regular fa-paper-plane"></i></a>
                    </div>
                </div>
                </div>
            </div>
            <div className='card-box'>
                <div class="card">
                <img src={Auto} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">AutoBots</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn r-btn"><i class="fa-brands fa-react"></i> React</button>
                     <button property='button' class="btn j-btn"><i class="fa-brands fa-js"></i> Javascript</button>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair'>
                        <a href="https://github.com/kunalambarte17/AutoBots" class="btn btn-outline-success">Get Code <i class="fa-solid fa-code"></i></a>
                    </div>
                </div>
                </div>
            </div>
            <div className='card-box'>
                <div class="card" >
                <img src={Rest} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Restaurant Website</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn r-btn"><i class="fa-brands fa-css3"></i> Tailwind</button>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair'>
                        <a href="#" class="btn btn-outline-success">Get Code <i class="fa-solid fa-code"></i></a>
                        <a href="#" class="btn btn-outline-success">Visit <i class="fa-regular fa-paper-plane"></i></a>
                    </div>
                </div>
                </div>
            </div>
            <div className='card-box'>
                <div class="card" >
                <img src={Anime} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Anime Website</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn r-btn"><i class="fa-brands fa-css3"></i> Tailwind</button>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair'>
                        <a href="https://github.com/kunalambarte17/Anime-Site" class="btn btn-outline-success">Get Code <i class="fa-solid fa-code"></i></a>
                        <a href="https://anime-site-indol.vercel.app/" class="btn btn-outline-success">Visit <i class="fa-regular fa-paper-plane"></i></a>
                    </div>
                </div>
                </div>
            </div>
        </div> */}
        <div className='card-container container'>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Food} alt="" />
                </div>
                <div className='contain'>
                    <h5 class="c-title">Tomato</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn r-btn"><i class="fa-brands fa-react"></i> React</button>
                     <button property='button' class="btn j-btn"><i class="fa-brands fa-js"></i> Javascript</button>
                    </div>
                    <p class="c-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/Tomato" class="btn btn-primary">Get Code <i class="fa-solid fa-code"></i></a>
                        <a href="https://tomato-yum.vercel.app/" class="btn btn-primary">Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Villa} alt="" />
                </div>
                <div className='contain'>
                    <h5 class="c-title">WanderVillas</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn e-btn"><i class="fa-brands fa-node-js"></i> Ejs</button>
                     <button property='button' class="btn j-btn"><i class="fa-brands fa-js"></i> Javascript</button>
                    </div>
                    <p class="c-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/WanderVillas" class="btn btn-primary">Get Code <i class="fa-solid fa-code"></i></a>
                        <a href="https://travelbroad.onrender.com/listings" class="btn btn-primary">Vist <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Auto} alt="" />
                </div>
                <div className='contain'>
                    <h5 class="c-title">AutoBots</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn r-btn"><i class="fa-brands fa-react"></i> React</button>
                     <button property='button' class="btn j-btn"><i class="fa-brands fa-js"></i> Javascript</button>
                    </div>
                    <p class="c-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/AutoBots" class="btn btn-primary">Get Code <i class="fa-solid fa-code"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Rest} alt="" />
                </div>
                <div className='contain'>
                    <h5 class="c-title">Restaurant Website</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn r-btn"><i class="fa-brands fa-css3"></i> Tailwind</button>
                    </div>
                    <p class="c-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair2'>
                        <a href="#" class="btn btn-primary">Get Code <i class="fa-solid fa-code"></i></a>
                        <a href="#" class="btn btn-primary">Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <div className="card-box1">
                <div className="img-box card-img-top">
                    <img src={Anime} alt="" />
                </div>
                <div className='contain'>
                <h5 class="c-title">Anime Website</h5>
                    <div className='btn-pair d-flex'>
                     <button property='button' class="btn r-btn"><i class="fa-brands fa-css3"></i> Tailwind</button>
                    </div>
                    <p class="c-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='btn-pair2'>
                        <a href="https://github.com/kunalambarte17/Anime-Site" class="btn btn-primary">Get Code <i class="fa-solid fa-code"></i></a>
                        <a href="https://anime-site-indol.vercel.app/" class="btn btn-primary">Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

  )
}

export default ProjectCard
