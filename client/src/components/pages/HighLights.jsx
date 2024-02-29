import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Callto from '../common/Home/cta/Callto'
import Testimonial from '../common/Home/Testimonial/Testimonial'
import sumiimg from '../assets/sumimam.jpg'
import './About.css'
import ImageGallery from '../common/highlights/ImageGallery'
import VideoSliderCard from '../common/highlights/videoslider/VideoSliderCard '
import WhatsApp from '../whatsapp/WhatsApp'
import FloatingMailIcon from './email floating icon/Floating'
import {Link} from 'react-router-dom'
export default function Highlights() {
  const handleButtonClick = (eventName) => {
    // Handle button click logic based on the event name
    console.log(`Button clicked for event: ${eventName}`);
    // You can perform any other actions you need here
  };


  
  return (
    <div>
<div className="container-xxl bg-white p-0">

  {/* Navbar Start */}
<Navbar/>
  {/* Navbar End */}
  {/* Page Header End */}
  <div>
       <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">

      <nav aria-label="breadcrumb animated slideInDown">

      </nav>
      <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-2 text-white animated slideInDown mb-4">The Best Kindergarten School For Your Child</h1>
                                                               </div>
                            </div>
    </div><div>  <Link className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3  animated slideInLeft" to='/contact'>Learn More</Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="btn btn-dark rounded-pill py-sm-3 px-sm-5  animated slideInRight" to="/admission"> For Admission</Link>   </div>
  </div>
    </div>

<ImageGallery/>

<VideoSliderCard/>



<Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>
<WhatsApp phoneNumber="88075 15122" message="Hello! I'm interested in your services."/>
<FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 
{/* JavaScript Libraries */}
{/* Template Javascript */}

    </div>
  )
}
