import React from 'react'
import fmnlogo from './fmnlogo.svg'
import './Navbar.css'
import DreamJob from '../DreamJob/DreamJob'
import FeaturedCompanies from '../FeaturedCompanies/FeaturedCompanies'
import WhatCanFMNHelp from '../WhatCanFMNHelp/WhatCanFMNHelp'
import ChooseYourPlan from '../ChooseYourPlan/ChooseYourPlan'
import Services from '../Services/Services'
import HowtoApply from '../HowtoApply/HowtoApply'
import WhatClientSays from '../WhatClientSays/WhatClientSays'
import GetInTouch from '../getInTouch/GetInTouch'
import Refer from "../Refer/Refer.jsx"
import Footer from "../footer/Footer"
import { Link } from 'react-router-dom'
export default function Navbar () {
  return (
    <>
      <div className='Navbar'>
        <div className='navbar'>
          <img src={fmnlogo} alt='' />
          <a href='/'>Job</a>
          <a href='/'>Companies</a>
          <a href='/JobseekerSubscription'>Subscriptions</a>
          <a href='/'>ReferralFAQ</a>
          <a href='/'>Blogs</a>
          <a href='/'>Contact</a>
          <Link to='/RegisterTab' className='Next_Page'>
            <button>Register</button>
          </Link>
          <Link to='/Login'>
            <button>Login</button>
          </Link>
        </div>
      </div>
      <DreamJob />
      <FeaturedCompanies />
      <WhatCanFMNHelp />
      <Refer/>
      <ChooseYourPlan />
      <Services />
      <HowtoApply />
      <WhatClientSays />
      <GetInTouch />
      <Footer/>
    </>
  )
}
