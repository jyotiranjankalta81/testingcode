import React from 'react'
import Adobe from './Adobe.png'
import Apple from './Apple.png'
import az from './az.png'
import FCart from './FCart.png'
import HCL from './HCL.png'
import Infosys from './Infosys.png'
import KPIT from './KPIT.png'
import TCS from './TCS.png'
import TJain from './TJain.png'
import './FeaturedCompanies.css'
export default function FeaturedCompanies() {
  return (
    <div className='FeaturedCompanies'>
        <div  className='featuredcompanies'>
            <div className='head-FC'>
                <p>Featured companies actively hiring</p>
            </div>
            <div className='body-FC'>
                <div className='body-FC-col-1'>
                
                        <img src={KPIT} alt="" className='FCIMG-1' />
                    
                        <img src={HCL} alt="" className='FCIMG-2' />
                    
                        <img src={Apple} alt="" className='FCIMG-3'/>
                    
                        <img src={TJain} alt="" className='FCIMG-4'/>
                    
                        <img src={TCS} alt="" className='FCIMG-5'/>
                </div>
                <div className='body-FC-col-1'>
                        <img src={Adobe} alt="" className='FCIMG-6'/>
                    
                        <img src={FCart} alt="" className='FCIMG-7'/>
                    
                        <img src={Infosys} alt="" className='FCIMG-8'/>
                    
                        <img src={az} alt="" className='FCIMG-9'/>
                </div>
            </div>
        </div>
    </div>
  )
}
