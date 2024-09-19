import React from 'react'
import logo from '../assets/LOGO.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
        <img src={logo} className='mx-2 w-32 '  alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a target="_blank" href="https://github.com/poojacharupalli"><FaGithub/></a>
        <a target="_blank" href="https://www.linkedin.com/in/charupalli-pooja-aa3031231/"><FaLinkedin/></a>
        </div>
        
    </div>
  )
}

export default Navbar