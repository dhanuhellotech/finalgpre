import React from 'react'
import './Callto.css'
import {Link} from 'react-router-dom'
export default function Callto() {
  return (
    <div>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded" src="assets/img/childrenpics/award.png" style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">SATURDAY  Fun Day </h1>
                {/* <h1 className="mb-4">
                 Welcome to Our Saturday Events 
                </h1> */}
                <h3>'Make yourself your own competition, strive to be better than
  yesterday, and you'll find the true essence of life!'</h3>
  <div>
  <ul className="list-unstyled">
                  <li style={{fontSize:'20px'}}><i className="fa fa-check me-2 text-primary"></i>Board games</li>
                  <li style={{fontSize:'20px'}}><i className="fa fa-check me-2 text-primary"></i>Craft</li>
                  <li  style={{fontSize:'20px'}}><i className="fa fa-check me-2 text-primary"></i>Fun activities</li>
                  <li  style={{fontSize:'20px'}}><i className="fa fa-check me-2 text-primary"></i>Photo time</li>
                </ul>
                </div>
                {/* <a className="btn btn-primary py-3 px-5" href='newsletter'>Download Our Events <i className="fa fa-arrow-right ms-2" /></a> */}

                <button  href='newsletter' className="cssbuttons-io-button">
  <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" fill="currentColor" /></svg>
<Link to="newsletter"><span style={{color:'white'}}>Download Our Monthly Newsletter</span></Link>
</button>

              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
