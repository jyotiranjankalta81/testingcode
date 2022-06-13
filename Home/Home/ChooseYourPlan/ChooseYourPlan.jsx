import React from 'react'
import './ChooseYourPlan.css'
export default function ChooseYourPlan() {
  return (
    <div className='ChooseYourPlan'>
        <div className='chooseyourplan'>
            <div className='plan-head-card'>
                <p className='ChooseYourPlan-head'>Choose Your Plan</p>
                <p>Lorem Ipsum Lorem Ipsum  Lorem Ipsum <br />Lorem Ipsum Lorem Ipsum  Lorem</p>
            </div>
            <div className='ChooseYourPlan-body'>
                <div className='cardyourplan'>
                    <input type="radio" name="" id=""  checked/> <label htmlFor="">Instant hiring </label>
                    <div className='button-help'>
                        <button>1 Month/300 INR</button>
                        <button>3 Month/500 INR</button>
                    </div>
                </div>
                <div className='cardyourplan'>
                    <input type="radio" name="" id="" /> <label htmlFor="">Instant hiring </label>
                    <div className='button-help'>
                        <button>1 Month/300 INR</button>
                        <button>3 Month/500 INR</button>
                    </div>
                </div>
                <div className='cardyourplan'>
                    <input type="radio" name="" id="" /> <label htmlFor="">Instant hiring </label>
                    <div className='button-help'>
                        <button>1 Month/300 INR</button>
                        <button>3 Month/500 INR</button>
                    </div>
                </div>
            </div>
            <div className='Subscribe-btn-choo'>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
