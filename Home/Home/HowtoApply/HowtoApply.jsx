import React from 'react'
import './HowtoApply.css'
import Login from './Login.png'
import Dashboard from './Dashboard.png'
import ApplyJob from './ApplyJob.png'
import right from './right.png'
export default function HowtoApply() {
  return (
    <div className='HowtoApply'>
        <p className='apply-heading'>How to Apply</p>
        <div className='howtoapply'>
            <div className='Apply-col-1'>
                <img src={Login} alt="" />
                <p>Login</p>
            </div>
            <div className='right'>
                <img src={right} alt="" />
            </div>
            <div className='Apply-col-1'>
                <img src={Dashboard} alt="" />
                <p>Login</p>
            </div>
            <div className='right'>
                <img src={right} alt="" />
            </div>
            <div className='Apply-col-1'>
                <img src={ApplyJob} alt="" />
                <p>Login</p>
            </div>
        </div>
    </div>
  )
}
