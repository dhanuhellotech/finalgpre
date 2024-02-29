import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Facilities from '../common/Home/facilities/Facilities'
import Callto from '../common/Home/cta/Callto'

import HomeAbout from '../common/Home/About/HomeAbout'
import Classcard from '../common/Home/cards/Classcard'
import Appointment from '../common/Home/Appointment/Appointment'
import Teachertest from '../common/Home/Teachers/Teachertest'
import Testimonial from '../common/Home/Testimonial/Testimonial'
import Carousel from '../common/Home/carousel/Carousel'
import WhatsApp from '../whatsapp/WhatsApp'
import Floating from './email floating icon/Floating'
import FloatingEmailIcon from './email floating icon/Floating'
import FloatingMailIcon from './email floating icon/Floating'
export default function Home() {
  return (
    <div>
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}

  {/* Spinner End */}
  {/* Navbar Start */}
<Navbar/>
  {/* Navbar End */}
  {/* Carousel Start */}
  {/* Page Header End */}
 <Carousel/>
  {/* Carousel End */}
  {/* Facilities Start */}
<Facilities/>
  {/* Facilities End */}
  {/* About Start */}
<HomeAbout/>
  {/* About End */}
  {/* Call To Action Start */}
{/* <Callto/> */}
  {/* Call To Action End */}
  {/* Classes Start */}
<Classcard/>
<Callto/>
  {/* Classes End */}
  {/* Appointment Start */}
<Appointment/>
  {/* Appointment End */}
  {/* Team Start */}
{/* <Teachertest/> */}
  {/* Team End */}
  {/* Testimonial Start */}
<Testimonial/>
  {/* Testimonial End */}
  {/* Footer Start */}

<Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>

</div>
<div>  
  <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services."/>
</div>
  <FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 


    </div>
  )
}
