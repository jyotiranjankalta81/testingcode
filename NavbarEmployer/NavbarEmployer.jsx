import React from 'react'
import "./NavbarEmployer.css"
import { Link } from 'react-router-dom'
import Logo from '../assets/image27.png'



export default function NavbarEmployer() {
  return (
    
          <div className='Navbar-ContainerEmployer'>
      <div className='Nav_logoEm'>
        <img src={Logo} alt='' />
      </div>
      <div className='Nav-linksEm'>
        <Link to='/'>Jobs</Link>
        <Link to='/'>Companies</Link>

        <Link to='/'>Subscription</Link>
        <Link to='/'>Referral</Link>

        <Link to='/'>FAQ</Link>
        <Link to='/'>Blogs</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>For Candidate</Link>

        {/* <Link to='/'>Freelance World</Link> */}
      </div>
    </div>

    
  )
}
