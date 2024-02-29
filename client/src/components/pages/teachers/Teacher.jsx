import React, { useState,useEffect} from 'react';
import Navbar from '../../common/Navbar.jsx';
import Footer from '../../common/Footer.jsx';
import WhatsApp from '../../whatsapp/WhatsApp.jsx';
import Carousel from 'react-bootstrap/Carousel';  
import axios from 'axios'
import FloatingMailIcon from '../email floating icon/Floating.jsx';
import { client,imageUrl } from '../../clientaxios/Client.js';
import './teacher.css'
const TestimonialCard = ({ testimonials }) => {
  return (
    <Carousel>
    {testimonials.map((testimonial, index) => (
      <Carousel.Item key={index}>
        <div
          className="card"
          style={{
            backgroundImage: `url('assets/img/fpkdl.com_900_images_fpkdl.com_900_country-style-chalkboard-vintage-country-kitchen_962764-85774.jpg')`,
            backgroundSize:'cover',
    
            backgroundRepeat:'no-repeat',
            backgroundPosition: 'center',
            minHeight: '90vh',
            marginTop: '5%',
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
          }}
        >
              <div className='container'>
          <div className="row">
        
            <div className="col-md-4 col-sm-6">
              <img
                src={`${imageUrl}/${testimonial.imageUrl}`}
                className="custom-parent-card-img-top img-responsive"
                alt={testimonial.name}
          
              />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body text-left">
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text"><strong>About me:</strong> {testimonial.about}</p>
                <p className="card-text"><strong>Home town:</strong> {testimonial.homeTown}</p>
                <p className="card-text"><strong>Birthday:</strong> {testimonial.dateOfBirth.split('T')[0]}</p>
                <p className="card-text"><strong>Degree:</strong> {testimonial.degree}</p>
                <p className="card-text"><strong>Hobby:</strong> {testimonial.hobby}</p>
                <p className="card-text"><strong>Teaching goal:</strong> {testimonial.teachingGoal}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
  );
};

export default function Teacher() {
  const [testimonials,setTestimonials] = useState([]);
  useEffect(() => {
    fetchTeacherDetails();
  }, []);

  const fetchTeacherDetails = async () => {
    try {
      const response = await client.get('/teachers');
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching teacher details:', error);
    }
  }
  // Example testimonial data


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
              About Teachers
            </h1>
            <nav aria-label="breadcrumb" className="animated slideInDown">
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Testimonial Cards */}
        <div className="container">
        <h1 className="display-4 text-black animated slideInDown mb-2 align-items-center" style={{textAlign:"center", marginBottom:'3em'}}>
        Meet Our Stuffy

            </h1>
            <h3 className='text-black animated slideInDown mb-2'style={{textAlign:"center", marginBottom:'3em'}}>Our Best Popular Teachers</h3>
          <div className="row">
            <div className="col-md-12 mb-4">
              <TestimonialCard testimonials={testimonials} />
            </div>
          </div>
        </div>
        {/* Testimonial Cards End */}
        <Footer />
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
      <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services." />

      <FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 
    </div>
  );
}
