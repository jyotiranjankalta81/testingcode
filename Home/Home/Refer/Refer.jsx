import React from 'react'
import ReferImg from './ReferImg.png'
import './Refer.css'
export default function Refer() {
  return (
    <div className='Refer'>
        <div className='refer'>
            <dir className='Refer-text'>
                <p>Now refer your friends on our platform using whatsapp , email, linkedin facebook. </p>
                <img src={ReferImg} alt="" />
            </dir>
            <div className='Refer-BTN'>
                <button className='btn'>Refer</button>
            </div>
        </div>
    </div>
  )
}
