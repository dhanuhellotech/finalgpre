// Admission.js

import React,{useEffect,useState} from 'react';

import axios from "axios";
import Navbar from '../../common/Navbar.jsx';
import Footer from '../../common/Footer.jsx';

import CalendarCard from './CalendarCard.jsx';

import WhatsApp from '../../whatsapp/WhatsApp.jsx';
import FloatingMailIcon from '../email floating icon/Floating.jsx';
export default function Calendar() {

     const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    // You can add additional logic here to handle click events
  };

    const months = [
        { name: 'January', events: [{ date: '21', description: 'First Day of Winter Break' }, { date: '25', description: 'First Day of Summer Break' }] },
        { name: 'February', events: [{ date: '21', description: 'First Day of Winter Break' }, { date: '25', description: 'First Day of Summer Break' }] }, 
        { name: 'February', events: [{ date: '21', description: 'First Day of Winter Break' }, { date: '25', description: 'First Day of Summer Break' }] }, 
        { name: 'February', events: [{ date: '21', description: 'First Day of Winter Break' }, { date: '25', description: 'First Day of Summer Break' }] }, 
        { name: 'February', events: [{ date: '21', description: 'First Day of Winter Break' }, { date: '25', description: 'First Day of Summer Break' }] }, 
        { name: 'February', events: [{ date: '21', description: 'First Day of Winter Break' }, { date: '25', description: 'First Day of Summer Break' }] }, 
        { name: 'February', events: [{ date: '21', description: 'First Day of Winter Break' }, { date: '25', description: 'First Day of Summer Break' }] }, 
        { name: 'February', events: [{ date: '21', description: 'First Day of Winter Break' }, { date: '25', description: 'First Day of Summer Break' }] }, 
        // Add events for February
        // Add more months with their respective events
      ];
  return (
    <div>
      <div className="container-xxl bg-white p-0">
        {/* Navbar Start */}
        <Navbar />
        {/* Navbar End */}
        {/* Page Header End */}
        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
       Calendar
            </h1>
            <nav aria-label="breadcrumb" className="animated slideInDown">
              {/* <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                 Admission
                </li>
              </ol> */}
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
      
    



{/* cards */}

<CalendarCard/>

    
        <Footer />
       
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
      <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services."/>
      <FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 
    </div>
  );
}

