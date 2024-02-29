import React from 'react'
import sumiimg from '../../../assets/sumimam.jpg'
import { Link } from 'react-router-dom'
export default function HomeAbout() {
  return (
    <div>
        <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-4 ">Cognitive Development through Exploration
and Play</h1>
<p className=''>Early childhood is not only a period of amazing physical
growth, it is also a time of remarkable mental development</p>          <p className="mb-4 ">G Preschool supports every child’s social and
emotional development in ways that allow
each child to form positive relationships with
others</p>
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
    
              <Link to="/ourstory" className="btn btn-primary rounded-pill py-3 px-5">Read More</Link>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <img className="rounded-circle flex-shrink-0" src={sumiimg} alt style={{width: 45, height: 45}} />
                <div className="ms-3">
                  <h6 className="text-primary mb-1">Sumi Mam</h6>
                  <small>CEO &amp; Founder</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
          <div className="row">
            <div className="col-12 text-center">
              <img className="img-fluid w-75 rounded-circle bg-light p-3" src="assets/img/about-1.jpg" alt />
            </div>
            <div className="col-6 text-start" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src="assets/img/about-2.jpg" alt />
            </div>
            <div className="col-6 text-end" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src="assets/img/about-3.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
