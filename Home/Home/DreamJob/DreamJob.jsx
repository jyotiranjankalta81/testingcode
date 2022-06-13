import React from 'react'
import tele from './tele.png'
// import Dream from './Dream.png'
// import Dream from "../../../../public/assets/Home/Dream.png"
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import './DreamJob.css'
import FeaturedCompanies from '../FeaturedCompanies/FeaturedCompanies'
import HowtoApply from '../HowtoApply/HowtoApply'
import WhatClientSays from '../WhatClientSays/WhatClientSays'
import WhatCanFMNHelp from '../WhatCanFMNHelp/WhatCanFMNHelp'
import ChooseYourPlan from '../ChooseYourPlan/ChooseYourPlan'
import Services from '../Services/Services'
import GetInTouch from '../getInTouch/GetInTouch'
export default function DreamJob() {
  return (
    <div className='DreamJob'>
        <div className='dreamjob'>
            <div className='DreamJob-head'>
                <img src={tele} alt="" />
                <p>Find Your <span>Dream Job</span> Here <br />  Easy And Fast</p>
                <p className='DreamJob-text'>Finding proper jobs in India can be tough.. <span>FINDMYNEXT</span>  is a platform <br /> where you can get desire jobs without any difficulty</p>
            </div>
            <div className='DreamJob-Body'>
                <div className='body-img'>
                    {/* <img src={Dream} alt="" /> */}
                </div>
                <div className='Body-get'>
                    <p className='Body-get-head'>GET</p>
                    <p className='Body-get-body'>General Evaluation Test</p>
                    <p className='Body-get-foot'><BsFillArrowRightCircleFill/></p>
                </div>
                <div className='Body-get'>
                    <p className='Body-get-head'>PET</p>
                    <p className='Body-get-body'>Paid Evaluation Test</p>
                    <p className='Body-get-foot'><BsFillArrowRightCircleFill/></p>
                </div>
            </div>
            {/* <div>
                <FeaturedCompanies />
            </div>
            <div>
                <HowtoApply />
            </div>
            <div>
                <WhatClientSays />
            </div>
            <div>
                <WhatCanFMNHelp />
            </div>
            <div>
                <ChooseYourPlan />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <GetInTouch />
            </div> */}
        </div>
    </div>
  )
}
