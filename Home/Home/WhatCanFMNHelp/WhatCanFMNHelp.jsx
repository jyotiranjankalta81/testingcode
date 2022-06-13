import React from 'react'
import fmnhelp from './fmnhelp.png'
import './WhatCanFMNHelp.css'
export default function WhatCanFMNHelp() {
  return (
    <div className='WhatCanFMNHelp'>
        <div className='whatcanFMNhelp'>
            <div className='FMNhelp-text'>
                <p>What can FMN help you with?</p>
            </div>
            <div className='FMNhelp-cards'>
                <div className='fmncardhelp'>
                    <p className='fmncardhead'>Find your next job, effortlessly.</p>
                    <p>You deserve better than spammy job boards.br </p>
                    <p>In less than 5 mins, get matched to just the right opportunities you 
                        want. Connect with the actual hiring teams and get 
                        super fast responses back.
                    </p>
                </div>
                <div className='fmncardhead-img'>
                    <img src={fmnhelp} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
