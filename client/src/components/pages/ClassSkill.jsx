import React from 'react'
import WhatsApp from '../whatsapp/WhatsApp'
import FloatingMailIcon from './email floating icon/Floating'

export default function ClassSkill() {
  return (
    <div>
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  {/* Spinner End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
    <a href="index.html" className="navbar-brand">
      <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3" />Kider</h1>
    </a>
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto">
        <a href="index.html" className="nav-item nav-link">Home</a>
        <a href="about.html" className="nav-item nav-link">About Us</a>
        <a href="classes.html" className="nav-item nav-link active">Classes</a>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
            <a href="facility.html" className="dropdown-item">School Facilities</a>
            <a href="team.html" className="dropdown-item">Popular Teachers</a>
            <a href="call-to-action.html" className="dropdown-item">Become A Teachers</a>
            <a href="appointment.html" className="dropdown-item">Make Appointment</a>
            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
            <a href="404.html" className="dropdown-item">404 Error</a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">Contact Us</a>
      </div>
      <a href className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3" /></a>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Page Header End */}
  <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">
      <h1 className="display-2 text-white animated slideInDown mb-4">Classes</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Classes</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Classes Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">School Classes</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src ="assets/img/classes-1.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Art &amp; Drawing</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src ="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
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
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src ="assets/img/classes-2.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Color Management</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src ="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
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
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src ="assets/img/classes-3.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Athletic &amp; Dance</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src ="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
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
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src ="assets/img/classes-4.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Language &amp; Speaking</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src ="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
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
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src ="assets/img/classes-5.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Religion &amp; History</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src ="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
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
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src ="assets/img/classes-6.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>General Knowledge</a>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src ="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div>
              <div className="row g-1">
                <div className="col-4">
                  <div className="border-top border-3 border-primary pt-2">
                    <h6 className="text-primary mb-1">Age:</h6>
                    <small>3-5 Years</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-top border-3 border-success pt-2">
                    <h6 className="text-success mb-1">Time:</h6>
                    <small>9-10 AM</small>
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
      </div>
    </div>
  </div>
  {/* Classes End */}
  {/* Appointment Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4">Make Appointment</h1>
              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name" />
                      <label htmlFor="gname">Gurdian Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                      <label htmlFor="gmail">Gurdian Email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="cname" placeholder="Child Name" />
                      <label htmlFor="cname">Child Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control border-0" id="cage" placeholder="Child Age" />
                      <label htmlFor="cage">Child Age</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: 100}} defaultValue={""} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src ="assets/img/appointment.jpg" style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Appointment End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Our Clients Say!</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src ="assets/img/testimonial-1.jpg" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src ="assets/img/testimonial-2.jpg" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src ="assets/img/testimonial-3.jpg" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Get In Touch</h3>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Quick Links</h3>
          <a className="btn btn-link text-white-50" href>About Us</a>
          <a className="btn btn-link text-white-50" href>Contact Us</a>
          <a className="btn btn-link text-white-50" href>Our Services</a>
          <a className="btn btn-link text-white-50" href>Privacy Policy</a>
          <a className="btn btn-link text-white-50" href>Terms &amp; Condition</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Photo Gallery</h3>
          <div className="row g-2 pt-2">
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src ="assets/img/classes-1.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src ="assets/img/classes-2.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src ="assets/img/classes-3.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src ="assets/img/classes-4.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src ="assets/img/classes-5.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src ="assets/img/classes-6.jpg" alt />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{maxWidth: 400}}>
            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href>Home</a>
              <a href>Cookies</a>
              <a href>Help</a>
              <a href>FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>
{/* JavaScript Libraries */}
{/* Template Javascript */}
<WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services."/>
<FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 

    </div>
  )
}
