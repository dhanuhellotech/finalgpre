import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Callto from "../common/Home/cta/Callto";
import Testimonial from "../common/Home/Testimonial/Testimonial";
import sumiimg from "../assets/sumimam.jpg";
import "./About.css";
import Classcard from "../common/curriculum/cards/Cards";
import About from "../common/curriculum/cards/About/About";
import WhatsApp from "../whatsapp/WhatsApp";
import FloatingMailIcon from "./email floating icon/Floating";
import { Link } from "react-router-dom";
export default function Curriculum() {
  return (
    <div>
      <div>
        <div className="container-xxl bg-white p-0">
          {/* Spinner Start */}
          {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
          {/* Spinner End */}
          {/* Navbar Start */}
          <Navbar />
          {/* Navbar End */}
          {/* Page Header End */}
          <div>
            <div className="container-xxl py-5 page-header position-relative mb-5">
              <div className="container py-5">
                <nav aria-label="breadcrumb animated slideInDown">
                  {/* <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Curriculum </li>
        </ol> */}
                </nav>
                <div class="row justify-content-start">
                  <div class="col-10 col-lg-8">
                    <h1 class="display-2 text-white animated slideInDown mb-4">
                      The Best Kindergarten School For Your Child
                    </h1>
                   
                  </div>
              
                </div>
              </div>
              <div> <Link
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                      to="/contact"
                    >
                      Learn More
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                      to="/franchise"
                    >
                      {" "}
                      Our Franchise
                    </Link></div>
            </div>
          </div>
          {/* Page Header End */}
          {/* about  */}

          <About />
          {/* About End */}

          <Classcard />

          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
          {/* Back to Top */}
          <a
            href="#"
            className="btn btn-lg btn-primary btn-lg-square back-to-top"
          >
            <i className="bi bi-arrow-up" />
          </a>
        </div>

        {/* Template Javascript */}
      </div>

      <WhatsApp
        phoneNumber="6374970664"
        message="Hello! I'm interested in your services."
      />

      <FloatingMailIcon emailAddress="thegpreschool@gmail.com" />
    </div>
  );
}
