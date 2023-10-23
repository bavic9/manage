import React from 'react'
import logo from '../img/logo-white.svg'
import facebook from '../img/icon-facebook.svg'
import youtube from '../img/icon-youtube.svg'
import twitter from '../img/icon-twitter.svg'
import pinterest from '../img/icon-pinterest.svg'
import instagram from '../img/icon-instagram.svg'

const Footer = () => {
  return (
    <footer id='footer' className='bg-veryDarkBlue'>
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
            <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                <div className='mx-auto my-6 text-center text-white md:hidden'>
                    Copyright &copy; 2022, All Rights Reserved
                </div>
                <div>
                    <img className='h-8' src={logo} alt='logo'/>
                </div>
                <div className='flex justify-center space-x-4'>
                    <a href='#'>
                        <img className='h-8' src={facebook} alt='icon'/>
                    </a>
                    <a href='#'>
                        <img className='h-8' src={youtube} alt='icon'/>
                    </a>
                    <a href='#'>
                        <img className='h-8' src={twitter} alt='icon'/>
                    </a>
                    <a href='#'>
                        <img className='h-8' src={pinterest} alt='icon'/>
                    </a>
                    <a href='#'>
                        <img className='h-8' src={instagram} alt='icon'/>
                    </a>
                </div>
            </div>

            <div className='flex justify-around space-x-32'>
                <div className='flex flex-col space-y-3 text-white'>
                    <a href='#' className='hovera:text-brightRed'>Home</a>
                    <a href='#' className='hovera:text-brightRed'>Pricing</a>
                    <a href='#' className='hovera:text-brightRed'>Product</a>
                    <a href='#' className='hovera:text-brightRed'>About</a>
                </div>
                <div className='flex flex-col space-y-3 text-white'>
                    <a href='#' className='hovera:text-brightRed'>Careers</a>
                    <a href='#' className='hovera:text-brightRed'>Community</a>
                    <a href='#' className='hovera:text-brightRed'>Privacy Policy</a>
                </div>
            </div>

            <div className='flex flex-col justify-between'>
                <form>
                    <div className='flex space-x-3'>
                        <input type='text' className='flex-1 px-4 rounded-full focus:outline-none' placeholder='updated in your inbox'/>
                        <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>Go</button>
                    </div>
                </form>
                <div className='hidden text-white md:block'>
                    Copyright &copy; 2022, All Rights Reserved
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
