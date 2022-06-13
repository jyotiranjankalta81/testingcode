import React from 'react'
import './GetInTouch.css'


export default function GetInTouch() {
  return (
    <div className='GetInTouch<'>
        <div className='getintouch'>
            <div className='Get-form'>
                <div className='get-img'>
                    <p className='get-img-head'>Contact US</p>
                    <p className='get-img-foot' >Hyderabad, Telangana 500084,IN</p>
                    <div className='form-map'>
                        <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.247721259078!2d90.38346211429669!3d23.738544095147525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e6238e3dab%3A0x4a6a249406ac4414!2sTechGen%20IT%20Solution!5e0!3m2!1sen!2sin!4v1650872304227!5m2!1sen!2sin" 
                        width="1200%" 
                        height="250" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='getin-form'>
                    <h1>GET IN TOUCH</h1>
                    <form action="submit">
                        <div className='Form-data'>
                        <label htmlFor="Name"></label>
                        <input type="text" name="" id="" placeholder='Your Name' />
                        <label htmlFor="Email"></label>
                        <input type="email" name="" id="" placeholder='Your Email' />
                        <label htmlFor="message"></label>
                        <textarea name="meassage" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        <button type='submit'> Send </button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    
    </div>
  )
}
