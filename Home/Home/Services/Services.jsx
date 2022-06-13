import React from 'react'
import FeaturedProfile from './FeaturedProfile.png'
import ResumeMaker from './ResumeMaker.png'
import ProfileHighlighter from './ProfileHighlighter.png'
import CareerBooster from './CareerBooster.png'
import './Services.css'
export default function Services() {
  return (
    <div className='Services'>
        <div className='services'>
            <div className='Services-txt'>
                <p>Services</p>
            </div>
            <div className='Services-card'>
                <div className='Services-card-data'>
                    <img src={ProfileHighlighter} alt="" />
                    <p className='card-data-head'>Profile Highlighter</p>
                    <p>Grab the attention of employers</p>
                </div>
                <div className='Services-card-data'>
                    <img src={ResumeMaker} alt="" />
                    <p className='card-data-head'>Resume Maker</p>
                    <p>Grab the attention of employers</p>
                </div>
                <div className='Services-card-data'>
                    <img src={FeaturedProfile} alt="" />
                    <p className='card-data-head'>Featured Profile</p>
                    <p>Grab the attention of employers</p>
                </div>
                <div className='Services-card-data'>
                    <img src={CareerBooster} alt="" />
                    <p className='card-data-head'>Career Booster</p>
                    <p>Grab the attention of employers</p>
                </div>
            </div>
        </div>
    </div>
  )
}
