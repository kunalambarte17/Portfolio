import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef , useState , useEffect } from 'react'


import { Link } from 'react-router-dom'
import logo from "../../assets/logoo.png"

import AOS from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
     
    const[menu, setMenu] = useState("home");

    const menuRef = useRef();

    const openMenu = () => {
    menuRef.current.style.right = '0';
    }
    const closeMenu = () => {
    menuRef.current.style.right = '-350px';
    }

    useEffect(()=> {
      AOS.init({duration: 1000, once: true});
    }, [])

  return (
    <div className="navbar" data-aos="fade-down">
        <Link to={'/'}>
        <img src={logo} alt="" className="logo"/>
        </Link>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>

        <ul ref={menuRef} className="nav_menu">
            <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
            
            <li><Link className='anchor-link' to={'/'}><p>Home</p></Link></li>
            <li><Link className='anchor-link' to={'/project'}><p>Project</p></Link></li>
            <li><Link className='anchor-link' to={'/resume'}><p>Resume</p></Link></li>
            
            
        </ul>
    </div>
  )
}

export default Navbar