import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sumiimg from '../../../../assets/sumimam.jpg';
// import './About.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  return (
    <div className="about-container">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 about-img" data-aos="fade-right" data-aos-delay="500">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="mask-container">
                    <video className="video-fluid w-50 bg-light p-3 masked-video" autoPlay loop muted>
                      <source src="assets/img/curriculum/currivideo.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <h1 className="mb-5">Developmental Milestones</h1>
              <p className="mb-4" style={{fontFamily:'sans-serif',fontSize:'23px',fontWeight:'bold'}}>Developmental Milestones are markers to measure a child's growth in areas of cognitive development, motor skills development, language development and socio-emotional development. They help us in understanding how children develop and differ from one another in their growth patterns. Milestones support the understanding that every child is unique and develops at his/her own pace. Natural development milestones are helpful in selecting the best age appropriate programs and activities for children.</p>
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="/">
                    Read More
                  </a>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle flex-shrink-0" src={sumiimg} alt="" style={{ width: 45, height: 45 }} />
                    <div className="ms-3">
                      <h6 className="text-primary mb-1">Sumi Mam</h6>
                      <small>CEO & Founder</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
