import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import ProfilePic from './Profilephoto.svg'
import {ImQuotesLeft} from 'react-icons/im'
import './WhatClientSays.css'
export default function WhatClientSays() {
  return (
    <div className='WhatClientSays'>
        <div className='whatclientsays'>
            <div className='WhatClientSays-Head'>
                <p>What Client Says</p>
            </div>
            <div className='WhatClientSays-car'>
                <Carousel  
                infiniteLoop={true}  
                autoPlay={true} 
                showIndicators={true} 
                stopOnHover={true}
                autoFocus={true}
                showStatus={false}
                showThumbs={false}>
                    <div className='WhatClientSays-card'>
                        <div className='card-head-what'></div>
                        <img src={ProfilePic} alt="" className='What-IMG' />
                        <p className='What-Name'>Akash Singh</p>
                        <p className='What-loc'>INDIA</p>
                        <p className='what-message-1'><ImQuotesLeft /> Thanks Guys. keep the good work !</p>
                        <p className='what-message-2'>Awesome Design has completely surpassed our expextation</p>
                    </div>
                    <div className='WhatClientSays-card'>
                        <div className='card-head-what'></div>
                        <img src={ProfilePic} alt="" />
                        <p className='What-Name'>Akash Singh</p>
                        <p className='What-loc'>INDIA</p>
                        <p className='what-message-1'><ImQuotesLeft /> Thanks Guys. keep the good work !</p>
                        <p className='what-message-2'>Awesome Design has completely surpassed our expextation</p>
                    </div>
                    <div className='WhatClientSays-card'>
                        <div className='card-head-what'></div>
                        <img src={ProfilePic} alt="" />
                        <p className='What-Name'>Akash Singh</p>
                        <p className='What-loc'>INDIA</p>
                        <p className='what-message-1'><ImQuotesLeft /> Thanks Guys. keep the good work !</p>
                        <p className='what-message-2'>Awesome Design has completely surpassed our expextation</p>
                    </div>
                    <div className='WhatClientSays-card'>
                        <div className='card-head-what'></div>
                        <img src={ProfilePic} alt="" />
                        <p className='What-Name'>Akash Singh</p>
                        <p className='What-loc'>INDIA</p>
                        <p className='what-message-1'><ImQuotesLeft /> Thanks Guys. keep the good work !</p>
                        <p className='what-message-2'>Awesome Design has completely surpassed our expextation</p>
                    </div>
                </Carousel>
            </div>
        </div>
    </div>
  )
}
