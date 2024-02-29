import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import  './Franchise.css'
import Form from '../../common/franchise/form/Form';
import Banner from '../../common/franchise/texticons/Banner';

import CardSlide from '../../common/franchise/slider/CardSlide';
import FranAbout from '../../common/franchise/About/FranAbout';
import FloatingMailIcon from '../email floating icon/Floating';
import WhatsApp from '../../whatsapp/WhatsApp';
export default function Franchise() {


  return (
  
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar Start */}
<Navbar/>
  {/* Navbar End */}
  {/* Page Header End */}
  <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">
      <h1 className="display-2 text-white animated slideInDown mb-4">Franchise</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        {/* <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Franchise</li>
        </ol> */}
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
<Form/>

<Banner/>

<FranAbout/>
<CardSlide/>
  {/* Contact End */}
  {/* Footer Start */}
 <Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>

  <div>  
  <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services."/>
</div>
  <FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 

</div>


  )
}