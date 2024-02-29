import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Callto from "../common/Home/cta/Callto";
import Testimonial from "../common/Home/Testimonial/Testimonial";
import sumiimg from "../assets/sumimam.jpg";
import sumi1 from "../assets/about/sumimamimage.JPG"
import "./About.css";
import WhatsApp from "../whatsapp/WhatsApp";
import FloatingMailIcon from "./email floating icon/Floating";
import { Link } from "react-router-dom";

export default function About() {
  return (
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
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Pages</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Our Story{" "}
                  </li>
                </ol> */}
              </nav>
              <div class="row justify-content-start">
                <div class="col-10 col-lg-8">
                  <h1 class="display-2 text-white animated slideInDown mb-4">
                    The Best Kindergarten School For Your Child
                  </h1>
                  <Link className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft" to='/contact'>Learn More</Link>
      
<Link className="btn btn-dark rounded-pill py-sm-3 px-sm-5 mt-3 animated slideInRight" to="/franchise"> Our Franchise</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* about  */}
        <div className="container-xxl py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 float-lg-end">
        {/* /about right image */}
        <img src={sumi1} style={{width: '90%', height:'auto'}} alt="" />
      </div>
      <div className="col-lg-6 float-lg-start">
        <h1 className="mb-4 text-center text-lg-start">About us</h1>
        <p className="fs-20 text-center text-lg-start"style={{fontSize:'20px'}}>
          Being an Educationist dedicated to the advancement of learning and
          teaching. With a passion for education, I have acquired vast
          experience in developing innovative teaching methods and curricula
          that facilitate the acquisition of knowledge and skills by students
          of all ages. My educational background includes a degree in education,
          as well as advanced training in curriculum development, educational
          psychology, and instructional design. Through my <span style={{ color: '#FE633E', marginLeft: '6px' }}><b>10-plus years
          of experience,</b></span> I have gained expertise in designing and
          implementing educational programs that cater to diverse learning
          needs and styles. As an educationist, my ultimate goal is to inspire
          students to become lifelong learners who are equipped with the tools
          they need to achieve success in both academic and personal pursuits.
          I believe that every student has the potential to excel, and I am
          committed to unlocking that potential through creative and effective
          teaching strategies. In addition to my work in the classroom, I am
          also involved in research and writing on topics related to education
          with Board games. Through my publications, I aim to contribute to
          the ongoing conversation about the best practices in education and to
          promote the value of learning as a pathway to personal and societal
          growth.
        </p>
        <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src={sumiimg}
                        alt
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Sumi Mam</h6>
                        <small>CEO &amp; Founder</small>
                      </div>
                    </div>
                  </div>
      </div>
 
    </div>
  </div>
</div>
        {/* About Start */}
        <div className="container-xxl py-5" style={{ backgroundImage: `url('assets/img/white-brick-wall-textures-background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-4"> Our Vision</h1>
                <p style={{fontWeight:'bolder',color:'black',fontSize:'clamp(15px,2vw,18px)'}}>
                Our vision at G Preschool is clear and unwavering: we aim to democratize access to quality education by offering foundational learning at an affordable cost. Central to this vision is our commitment to a unique business model that empowers women entrepreneurs. We believe in breaking barriers and creating opportunities for women to thrive in the realm of business ownership without the burden of royalties.

By providing a pathway for women entrepreneurs to establish and grow their own preschools under our brand, we are not only advancing gender equality but also fostering economic empowerment within communities. Our approach not only benefits the individual franchise owners but also extends to the families they serve, as affordable education becomes more accessible to children from diverse backgrounds.

Through this visionary approach, we are not only shaping the future of education but also contributing to the broader goal of creating a more equitable society. At G Preschool, we see a future where every child has the opportunity to receive a quality education, and every woman has the chance to realize her entrepreneurial dreams, thus enriching both lives and communities alike.
                </p>
                <p style={{fontWeight:'bolder',color:'black',fontSize:'clamp(15px,2vw,18px)'}}>
                  To Provide quality early Years of education in a warm, safe
                  and creative setting
                </p>
                <div className="row g-4 align-items-center">
                  <div className="col-sm-6">
                  <Link to="/curriculum" className="btn btn-primary rounded-pill py-3 px-5" > Read More</Link>

                  </div>
                  <div className="col-sm-6">
                    <div className=" d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src={sumiimg}
                        alt
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Sumi Mam</h6>
                        <small>CEO &amp; Founder</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 about-img wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="row">
                  <div className="col-12 text-center">
                    <img
                      className="img-fluid w-75 rounded-circle bg-light p-3"
                      src="assets/img/about-1.jpg"
                      alt
                    />
                  </div>
                  <div
                    className="col-6 text-start"
                    style={{ marginTop: "-150px" }}
                  >
                    <img
                      className="img-fluid w-100 rounded-circle bg-light p-3"
                      src="assets/img/about-2.jpg"
                      alt
                    />
                  </div>
                  <div
                    className="col-6 text-end"
                    style={{ marginTop: "-150px" }}
                  >
                    <img
                      className="img-fluid w-100 rounded-circle bg-light p-3"
                      src="assets/img/about-3.jpg"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* About Start */}
        <div className="container-xxl py-5" style={{ backgroundImage: `url('assets/img/white-brick-wall-textures-background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div
                className="col-lg-6 about-img wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="row">
                  <div className="col-12 text-center">
                    <img
                      className="img-fluid  rounded-circle bg-light p-3"
                      src="assets/img/about-1.jpg"
                      
                      alt
                    />
                  </div>
                  <div
                    className="col-6 text-start"
                    style={{ marginTop: "-150px" }}
                  >
                    <img
                      className="img-fluid w-100 rounded-circle bg-light p-3"
                      src="assets/img/about-2.jpg"
                      alt
                    />
                  </div>
                  <div
                    className="col-6 text-end"
                    style={{ marginTop: "-150px" }}
                  >
                    <img
                      className="img-fluid w-100 rounded-circle bg-light p-3"
                      src="assets/img/about-3.jpg"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mb-4"> Our Mission</h1>
                <p style={{fontWeight:'bolder',color:'black',fontSize:'clamp(15px,2vw,18px)'}}>
             
Our mission at G Preschool is twofold: to guarantee high profitability (ROI) for all our franchise partners and to cultivate a robust foundation of trust in every facet of our operations. This dual focus serves as the cornerstone of our ethos, propelling us forward in our commitment to excellence. Central to our success is the unwavering dedication to fostering trust, both within our organization and with our valued partners.

We recognize that trust is the bedrock upon which enduring relationships are built. It is this trust that motivates our staff to consistently deliver their best, knowing that their efforts are valued and supported. By instilling a culture of trust and transparency, we empower our team members to excel, driving innovation and continuous improvement across all aspects of our preschools.

Moreover, our unwavering dedication to ensuring high profitability for our franchise partners underscores our commitment to their success. We understand that investing in a franchise is a significant decision, and we are fully committed to providing the support and resources necessary to maximize returns on that investment. Through strategic guidance, comprehensive training programs, and ongoing support, we equip our partners with the tools they need to thrive in their entrepreneurial endeavors.

In essence, at G Preschool, trust and profitability are not mutually exclusive; rather, they are mutually reinforcing pillars that underpin our mission and drive our success. By upholding these principles in every decision and action we take, we continue to build a thriving community of preschools that enrich the lives of children and families while offering unparalleled opportunities for our franchise partners to prosper.
                </p>
                <p style={{fontWeight:'bolder',color:'black',fontSize:'clamp(15px,2vw,18px)'}}>
                  To Ignite the spark in children to foster lifelong
                  learning,critical thinking, independent enquiry and empathy
                </p>
                <div className="row g-4 align-items-center">
                  <div className="col-sm-6">
               
                    <Link to="/curriculum" className="btn btn-primary rounded-pill py-3 px-5" > Read More</Link>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src={sumiimg}
                        alt
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Sumi Mam</h6>
                        <small>CEO &amp; Founder</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Call To Action Start */}
        <div className="container-xxl py-5" style={{ backgroundImage: `url('assets/img/close-up-blackboard-with-pieces-colored-chalk.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh', marginTop: '5%',            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', }}>
  <div className="container">
    <div className="bg-light rounded">
      <div className="row g-0 align-items-center">
        <div className="col wow fadeIn text-center" data-wow-delay="0.5s">
          <div className="h-100 d-flex flex-column justify-content-center p-5">
            <h1 className="mb-4">Game Schooling</h1>
            <h1 className="mb-4">5 Step Teaching Method</h1>

            <div className="row g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Aim</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Assessment</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Action</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Analysis</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Application</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

       
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
      <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services."/>
      <FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 

      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div>
  );
}
