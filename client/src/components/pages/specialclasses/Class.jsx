// Admission.js

import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../../common/Navbar.jsx';
import Footer from '../../common/Footer.jsx';
import WhatsApp from '../../whatsapp/WhatsApp.jsx';
import FloatingMailIcon from '../email floating icon/Floating.jsx';
import { client,imageUrl } from '../../clientaxios/Client.js';
export default function Class() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await client.get('/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  return (
    <div>
      <div className="container-xxl bg-white p-0">
        {/* Navbar Start */}
        <Navbar />
        {/* Navbar End */}
        {/* Page Header Start */}
        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
 Summer Classes
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
        {/* Cards */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
              <h1 className="mb-3" style={{ fontFamily: 'sans-serif' }}>We Provide Awesome Program To Build Bright Future</h1>
              <h4>Latest Program</h4>
            </div>
            <div className="row g-4">
              {classes.map(cls => (
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={cls._id}>
                  <div className="classes-item">
                   
                    <div className="bg-light  p-4 pt-5 mt-n5">
                    <div className=" w-75 mx-auto p-3">
                      <img className="img-fluid " src={`${imageUrl}/${cls.imageUrl}`} alt={cls.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                      <a className="d-block text-center h3 mt-3 mb-4" href>{cls.gameName}</a>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                          <div className="ms-3">
                            <h6 className="text-primary mb-1"> {cls.name}</h6>
                            <small> Playgroup Teacher</small>
                          </div>
                        </div>
                        <span className="bg-primary text-white rounded-pill py-2 px-3" href>${cls.price}</span>
                      </div>
                      <div className="row g-1">
                        <div className="col-4">
                          <div className="border-top border-3 border-primary pt-2">
                            <h6 className="text-primary mb-1">Age:</h6>
                            <small>{cls.age}</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-success pt-2">
                            <h6 className="text-success mb-1">Time:</h6>
                            <small>9:00-12:30 AM</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border-top border-3 border-warning pt-2">
                            <h6 className="text-warning mb-1">Capacity:</h6>
                            <small>30 Kids</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
        {/* Back to Top Button */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
      {/* WhatsApp */}
      <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services." />
      {/* Floating Mail Icon */}
      <FloatingMailIcon emailAddress="thegpreschool@gmail.com" />
    </div>
  );
}
