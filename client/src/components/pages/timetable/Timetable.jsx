// Admission.js
import React, { useState, useEffect } from 'react';
import Navbar from '../../common/Navbar.jsx';
import Footer from '../../common/Footer.jsx';
import WhatsApp from '../../whatsapp/WhatsApp.jsx';
import FloatingMailIcon from '../email floating icon/Floating.jsx';
import axios from 'axios';
import './timetable.css'; // Import the CSS file for card styling
import { client,imageUrl } from '../../clientaxios/Client.js';
export default function Timetable() {

   const [timetableEntries, setTimetableEntries] = useState([]);

  useEffect(() => {
    fetchTimetable();
  }, []);

  const fetchTimetable = async () => {
    try {
      const response = await client.get('/time/getAll');
      setTimetableEntries(response.data);
    } catch (error) {
      console.error('Error fetching timetable:', error);
    }
  };
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
   TimeTable
            </h1>
            <nav aria-label="breadcrumb" className="animated slideInDown">
              {/* <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Admission
                </li>
              </ol> */}
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Timetable section */}
        <div className="container mt-5">
          <h2 className="text-center mb-4">Time Table of GpreSchool</h2>
          <div className="timetable-container" >
            {/* Monday */}
       
            {/* <div className="timetable-row" style={{ display: 'flex', flexWrap: 'wrap',marginLeft:'10px',justifyContent:'space-evenly' }}>
              <div className="timetable-cell">
                <div className="parent">
                  <div className="card" >
                    <div className="logo">
                      <span className="circle circle1" />
                      <span className="circle circle2" />
                      <span className="circle circle3" />
                      <span className="circle circle4" />
                      <span className="circle circle5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                          <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)" />
                          <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
                          <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                        </svg>
                      </span>
                    </div>
                    <div className="glass" />
                    <div className="content">
                      <span className="title">Monday</span>
                      <span className="text">9:15 AM - 2:00 AM</span>
                      <span className="text">English</span>
                      <span className="text">Tamil</span>
                      <span className="text">Hindi</span>
                      <span className="text">Science</span>
                      <span className="text">Lunch Time</span>
                      <span className="text">Drawing</span>
                      <span className="text">Game Time</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timetable-cell">
                <div className="parent">
                  <div className="card">
                    <div className="logo">
                      <span className="circle circle1" />
                      <span className="circle circle2" />
                      <span className="circle circle3" />
                      <span className="circle circle4" />
                      <span className="circle circle5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                          <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)" />
                          <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
                          <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                        </svg>
                      </span>
                    </div>
                    <div className="glass" />
                    <div className="content">
                      <span className="title">TuesDay</span>
                      <span className="text">9:15 AM - 2:00 AM</span>
                      <span className="text">English</span>
                      <span className="text">Tamil</span>
                      <span className="text">Hindi</span>
                      <span className="text">Science</span>
                      <span className="text">Lunch Time</span>
                      <span className="text">Drawing</span>
                      <span className="text">Game Time</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timetable-cell">
                <div className="parent">
                  <div className="card">
                    <div className="logo">
                      <span className="circle circle1" />
                      <span className="circle circle2" />
                      <span className="circle circle3" />
                      <span className="circle circle4" />
                      <span className="circle circle5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                          <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)" />
                          <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
                          <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                        </svg>
                      </span>
                    </div>
                    <div className="glass" />
                    <div className="content">
                      <span className="title">WednesDay</span>
                      <span className="text">9:15 AM - 2:00 AM</span>
                      <span className="text">English</span>
                      <span className="text">Tamil</span>
                      <span className="text">Hindi</span>
                      <span className="text">Science</span>
                      <span className="text">Lunch Time</span>
                      <span className="text">Drawing</span>
                      <span className="text">Game Time</span>
                    </div>
                  </div>
                </div>
              </div>
              
              </div>
              <div className="timetable-row" style={{ display: 'flex', flexWrap: 'wrap',marginLeft:'10px',justifyContent:'space-evenly',marginTop:'10px' }}>
              <div className="timetable-cell">
                <div className="parent">
                  <div className="card">
                    <div className="logo">
                      <span className="circle circle1" />
                      <span className="circle circle2" />
                      <span className="circle circle3" />
                      <span className="circle circle4" />
                      <span className="circle circle5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                          <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)" />
                          <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
                          <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                        </svg>
                      </span>
                    </div>
                    <div className="glass" />
                    <div className="content">
                      <span className="title">Thursday</span>
                      <span className="text">9:15 AM - 2:00 AM</span>
                      <span className="text">English</span>
                      <span className="text">Tamil</span>
                      <span className="text">Hindi</span>
                      <span className="text">Science</span>
                      <span className="text">Lunch Time</span>
                      <span className="text">Drawing</span>
                      <span className="text">Game Time</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timetable-cell">
                <div className="parent">
                  <div className="card">
                    <div className="logo">
                      <span className="circle circle1" />
                      <span className="circle circle2" />
                      <span className="circle circle3" />
                      <span className="circle circle4" />
                      <span className="circle circle5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                          <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)" />
                          <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
                          <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                        </svg>
                      </span>
                    </div>
                    <div className="glass" />
                    <div className="content">
                      <span className="title">Friday</span>
                      <span className="text">9:15 AM - 2:00 AM</span>
                      <span className="text">English</span>
                      <span className="text">Tamil</span>
                      <span className="text">Hindi</span>
                      <span className="text">Science</span>
                      <span className="text">Lunch Time</span>
                      <span className="text">Drawing</span>
                      <span className="text">Game Time</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timetable-cell">
                <div className="parent">
                  <div className="card">
                    <div className="logo">
                      <span className="circle circle1" />
                      <span className="circle circle2" />
                      <span className="circle circle3" />
                      <span className="circle circle4" />
                      <span className="circle circle5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                          <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)" />
                          <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
                          <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                        </svg>
                      </span>
                    </div>
                    <div className="glass" />
                    <div className="content">
                      <span className="title">Saturday</span>
                      <span className="text">9:15 AM - 2:00 AM</span>
                      <span className="text">English</span>
                      <span className="text">Tamil</span>
                      <span className="text">Hindi</span>
                      <span className="text">Science</span>
                      <span className="text">Lunch Time</span>
                      <span className="text">Drawing</span>
                      <span className="text">Game Time</span>
                    </div>
                  </div>
                </div>
              </div>
              
              
              </div> */}
            {/* Add rows for other days (Tuesday, Wednesday, etc.) */}



            {timetableEntries.map(entry => (
    <div className="timetable-row" key={entry._id}>
      <div className="timetable-cell">
        <div className="parent">
          <div className="card">
            <div className="logo">
              {/* Your logo SVG code */}
            </div>
            <div className="glass" />
            <div className="content">
              <span className="title">{entry.day}</span>
              {/* <span className="text">{entry.date}</span> */}
              {entry.subjects.map((subject, index) => (
                <span className="text" key={index}>{subject.subject}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
          </div>
          
        </div>
        {/* Contact Start */}
        <Footer />
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
      <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services." />
      <FloatingMailIcon emailAddress="thegpreschool@gmail.com" />
    </div>
  );
}
