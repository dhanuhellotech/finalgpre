import React from 'react';
import { Link } from 'react-router-dom';
import Curriculum from './../pages/Curriculum';
import Franchise from '../pages/franchise/Franchise';

export default function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2 text-white"><i className="fa fa-map-marker-alt me-3 text-white" />No 3, 1st cross street, Duraisamy nagar, bypass road, Madurai - 625010</p>
              <p className="mb-2 text-white"><i className="fa fa-phone-alt me-3 text-white" />6374970664</p>
              <p className="mb-2 text-white"><i className="fa fa-envelope me-3 text-white" />thegpreschool@gmail.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/thegpreschool?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/thegpreschool?igshid=YzAwZjE1ZTI0Zg==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <Link to="/ourstory" className="btn btn-link text-white">Our Story</Link>
              <Link to="/contact" className="btn btn-link text-white">Get in Touch</Link>
              <Link to="/curriculum" className="btn btn-link text-white">Curriculum</Link>
              <Link to="/franchise" className="btn btn-link text-white">Franchise</Link>
              <Link to="/parentscorner" className="btn btn-link text-white">Parents Corner</Link>
              <Link to="/highlight" className="btn btn-link text-white">Highlights</Link>
              <a className="btn btn-link text-white" href="http://localhost:3001/free/login" target="_blank" rel="noopener noreferrer">Admin</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Photo Gallery</h3>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-1.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-2.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-3.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-4.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-5.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <Link className="border-bottom" to="/">TheGpreschool</Link>, All Right Reserved.
                Designed By <Link className="border-bottom" to="https://hellowtec.com/">Hello Technologies</Link>
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/* <div className="footer-menu">
                  <Link to="/">Home</Link>
                  <Link to="/cookies">Cookies</Link>
                  <Link to="/help">Help</Link>
                  <Link to="/faqs">FQAs</Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
