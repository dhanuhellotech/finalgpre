import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link
import logo from "../assets/logo/schol logo.png";
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { client,imageUrl } from '../clientaxios/Client';
import './navbar.css'
export default function Navbar() {
  const [tobbar, setTobbar] = useState([]);

  useEffect(() => {
    fetchTobbar();
  }, []);

  const fetchTobbar = async() => {
  await  client.get('/top')
      .then(response =>setTobbar(response.data))
      .catch(error => console.error('Error fetching tobbar:', error));
      
  };

  return (
    <div>
      {/* Top Bar */}
  
      <div style={{ backgroundColor: '#FE633E', color: 'white', padding: '10px', display: 'flex', flexWrap:'wrap',justifyContent: 'space-between', alignItems: 'center', }}>
  
        {tobbar.map(entry => (
          <div key={entry._id} style={{ display: 'flex',flexDirection:'row', flexWrap:'wrap', alignItems: 'center',justifyContent:'space-between',width:'100%' }}>
            <span style={{  }}><i className="fa fa-phone-alt me-3 text-white" />{entry.number}</span>
            <span ><FaMapMarkerAlt />{entry.location}</span>
            <span key={entry._id} to="/admission" className="btn btn-primary rounded-pill btn-md me-3  h1">School Open Timing: {entry.schoolOpenTiming}</span>
          </div>
        ))}


    </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <Link to="/" className="navbar-brand"style={{ width: '35%' }}>
          <img src={logo}   style={{ width: '25%' }} alt="Logo" />
        </Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/ourstory" className="nav-item nav-link">
              Our<span style={{ color: '#FE633E', marginLeft: '6px' }}>Story</span>
            </Link>
            {/* Add Link component to other navigation items */}
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
              <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                <Link to="/teachers" className="dropdown-item">Teachers</Link>
                <Link to="/classes" className="dropdown-item">Classes And Pricing</Link>
                <Link to="/calendar" className="dropdown-item">Academic Calendar</Link>
                <Link to="/timetable" className="dropdown-item">Time Table</Link>
              </div>
            </div>
            <Link to="/curriculum" className="nav-item nav-link">Curriculum</Link>
            <Link to="/franchise" className="nav-item nav-link">Franchise</Link>
            <Link to="/parentscorner" className="nav-item nav-link">ParentsCorner</Link>
            <Link to="/highlight" className="nav-item nav-link">Highlights</Link>
            <Link to="/contact" className="nav-item nav-link">GetinTouch</Link>
          </div>
          <Link to="/admission" className="btn btn-primary rounded-pill btn-md me-3">Admission</Link>
        </div>
      </nav>
    </div>
  );
}
