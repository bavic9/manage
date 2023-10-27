import React from 'react'
import { useRef, useState } from 'react'
import logo from '../img/logo.svg'
import { NavLink } from 'react-bootstrap';

const Navbar = () => {

    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('open')
    }

    const [menuOpened, setMenuOpened] = useState(false)

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && '-100%'}
        }
    }



  return (
    <nav className='relative container mx-auto p-6'>
        <div ref={navRef} className='flex item-center justify-between relative'>
            <div className='pt-2'>
                <img src={logo} alt={logo}/>
            </div>
            <div
            style={getMenuStyles(menuOpened)}
            className='md:flex float-right md:space-x-6 space-y-4 md:space-y-0  menu'>
                <a href='#' className='hover:text-darkGrayishBlue'>Pricing</a>
                <a href='#' className='hover:text-darkGrayishBlue'>Product</a>
                <a href='#' className='hover:text-darkGrayishBlue'>About</a>
                <a href='#' className='hover:text-darkGrayishBlue'>Careers</a>
                <a href='#' className='hover:text-darkGrayishBlue'>Community</a>
            </div>
            <button>
                <a href='#' className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</a>
            </button>

            <div onClick={ () => setMenuOpened ((prev) => !prev)}>
                <button id='menu-btn' onClick={showNav} className=' block hamburger md:hidden focus:outline-none'>
                    <span className='hamburger-top'></span>
                    <span className='hamburger-middle'></span>
                    <span className='hamburger-bottom'></span>
                </button>
            </div>

            {/* <div id='menu' onClick={showNav} className='hidden menuLink absolute flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 top-20 right-6 drop-shadow-md'>
                <a className='link' href="#">Pricing</a>
                <a className='link' href="#">Product</a>
                <a className='link' href="#">About Us</a>
                <a className='link' href="#">Careers</a>
                <a className='link' href="#">Community</a>
            </div> */}
        </div> 
        
    </nav>
  )
} 

export default Navbar



