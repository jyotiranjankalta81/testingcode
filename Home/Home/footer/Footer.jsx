import React from 'react'
import './Footer.css'
// import { BrowserRouter as Link } from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import TopImg from './Foot-img/TopImg.png'
import Logo from './Foot-img/Logo.png'

export default function Footer() {
  return (
    <div className='Footer'>
        <img src={TopImg} alt="" className='topimg' />
        <div className='footer'>
            <div className='Foot'>
                <div className='card'>
                    <div className='card-1'>
                        <img src={Logo} alt="" />
                        <h3>Connect With Us</h3>
                        <div className='icons'>
                            <a href="/"><FaFacebook /></a>
                            <a href="/"><ImLinkedin /></a>
                            <a href="/"><AiFillInstagram /></a>
                            <a href="/"><AiFillTwitterCircle /></a>
                            
                        </div>
                    </div>
                    <div className='card-2'>
                        <a href="/">About US</a>
                        <a href="/">Career</a>
                        <a href="/">Employer Home</a>
                        <a href="/">Sitemap</a>
                    </div>
                    <div className='card-2'>
                        <a href="/">About US</a>
                        <a href="/">Career</a>
                        <a href="/">Employer Home</a>
                        <a href="/">Sitemap</a>
                    </div>
                    <div className='card-3'>
                        <h2>Headquarters</h2>
                        <h3>Hyderabad, <br /> Telangana <br /> 500084, IN</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
