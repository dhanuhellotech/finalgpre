// Admission.js

import React,{useEffect,useState} from 'react';

import axios from "axios";
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import banner from '../assets/schbanner.jpg';
import sumiimg from '../assets/sumimam.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Admission.css'
import { Parallax } from 'react-parallax';
import TestimonialCard from '../common/admission/testimonial/TestimonialCard.jsx';
import WhatsApp from '../whatsapp/WhatsApp.jsx';
import FloatingMailIcon from './email floating icon/Floating.jsx';
import image from '../assets/childrenpics/caucasian-male-preschooler-with-bright-facial-emotions-removebg-preview.png'
import { Link } from 'react-router-dom';
import { client } from '../clientaxios/Client.js';


const  sendAdmissionEmail = async (formData) => {
  try {
    // Check if the email address is provided in the form data
    if (formData.email) {
      // Send the email
      const response = await client.post(
        "/api/Addmission",
        { email: formData.email }
      );
      console.log("Email sent successfully:", response.data);
    } else {
      console.error("Error sending email: Email address is required");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};


export default function Admission() {
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    childFirstName: "",
    childLastName: "",
    dateOfBirth: "",
    gender: "",
    currentSchool: "",
    gradeApplyingFor: "",
    preferredStartDate:"",
    questionsComments:"",
    howDidYouHearAboutUs:"",
    address:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "parentFirstName",
      "parentLastName",
      "childFirstName",
      "childLastName",
      "dateOfBirth",
      "gender",
      "currentSchool",
      "gradeApplyingFor",
      "preferredStartDate",
      "questionsComments",
      "howDidYouHearAboutUs",
      "address",
    ]

    // Check if any required field is empty
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(
        `Please fill in the following required fields: ${missingFields.join(
          ", "
        )}`
      );
      return; // Stop form submission if any required field is missing
    }
    try {
      const response = await client.post(
        "/api/Addmission",
        formData
      );
      console.log(response.data);
      setFormData({
        parentFirstName: "",
        parentLastName: "",
        childFirstName: "",
        childLastName: "",
        dateOfBirth: "",
        gender: "",
        currentSchool: "",
        gradeApplyingFor: "",
        preferredStartDate:"",
        questionsComments:"",
        howDidYouHearAboutUs:"",
        address:""
      });

      // Alert for successful submission
      alert("Form submitted successfully!");
      await  sendAdmissionEmail(formData);
      // Add any additional logic or UI updates upon successful submission
    } catch (error) {
      console.error("Error submitting contact form:", error.response.data);

      if (error.response && error.response.data && error.response.data.error) {
        // Display specific error message from the server
        alert(`Error: ${error.response.data.error}`);
      } else {
        // Generic error message if no specific error message is available
        alert("Error submitting the form. Please try again.");
      }

      // Add error handling logic or update UI accordingly
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 200,
    });
  }, []);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Set autoplay speed in milliseconds
    slidesToShow: 3, // Number of cards to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardData = [
    {
      title: ' Play Group (2 to 3 years)',
      description:
        'Toddlers are guided in the relationship and character development skills they need in order to communicate and collaborate with others,Should be able to follow two- or three-step directions.',
      image: 'assets/img/highlithsvideo/WhatsApp Video 2024-02-01 at 14.58.16_a2bd0008.mp4',
    },
    {
      title: 'UKG (5 to 6 years)',
      description:
       'Children are guided in the literacy and numeracy skills they need for big school all while building 21st-century skills like communication,collaboration, creativity and critical thinking.',
      image: 'assets/img/highlithsvideo/video.mp4',
    },
    {
      title: 'LKG (4 to 5 years)',
      description:
        'Children continue to be guided in the executive functioning skills they need to be able to complete tasks all while learning through hands-on and engaging activities.',
      image: 'assets/img/highlithsvideo/WhatsApp Video 2024-02-01 at 14.58.57_4043e268.mp4',
    },
    {
      title: 'Prekg (3 to 4 years)',
      description:'Older toddlers continue to work on their soft skills while also being guided in the academic skills they will need to start reading, writing, and increase their vocabulary.',
      image: 'assets/img/highlithsvideo/WhatsApp Video 2024-02-01 at 14.59.25_f6114a36.mp4',
    },
    // Add more card data as needed
  ];
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
            Admission
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
        <Parallax
      bgImage={banner}
      strength={500}
      className="parallax-section"
    >
        <div
          className="container-xxl py-5"
      
        >
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <h1 className="mb-3 text-white">Welcoming Our Gpreschool</h1>
            </div>
          </div>

          <div>
          <div className="container-xxl py-5">
              <div className="container para">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-4 text-white">
                      Welcoming Our Children, Back To Their Favorite Preschool.
                    </h1>
                    <p className='text-white 'style={{fontSize:'20px'}}>
                      We all want to select the best preschool for our kid's
                      primitive educational years and build a strong foundation
                      for the child's future. Little Millennium Preschool is one  
                      of the best preschools in India to lay the first step into
                      the educational journey of your child with:
                    </p>
                    <div className="row g-4 align-items-center">
                      <div className="col-sm-6">
                 
                        <Link  className="btn btn-primary rounded-pill py-3 px-5" to='/ourstory'>           Read More</Link>
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
                            <h6 className="text-primary mb-1 text-white">Sumi Mam</h6>
                            <small className='text-white'>CEO &amp; Founder</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-4 text-white">Admission Form</h1>
                    <form  className="appointment-form bg-primary p-4 rounded" onSubmit={handleSubmit}>
                  <div className="row g-3">
                  <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="parentFirstName"
                          name="parentFirstName"
                          placeholder="Your Name"
                          value={formData.parentFirstName}
                          onChange={handleChange}
                        />
                        <label htmlFor="parentFirstName">   parentFirstName</label>
                      </div>
                    </div>


                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="parentLastName"
                          name="parentLastName"
                          placeholder="Your Name"
                          value={formData.parentLastName}
                          onChange={handleChange}
                        />
                        <label htmlFor="parentLastName"> parentLastName</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="childFirstName"
                          name="childFirstName"
                          placeholder="Your Name"
                          value={formData.childFirstName}
                          onChange={handleChange}
                        />
                        <label htmlFor="childFirstName">childFirstName</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="childLastName"
                          name="childLastName"
                          placeholder="Your Name"
                          value={formData.childLastName}
                          onChange={handleChange}
                        />
                        <label htmlFor="childLastName"> childLastName</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control border-0"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          placeholder="Your Name"
                          value={formData.dateOfBirth.split('T')[0]}
                          onChange={handleChange}
                        />
                        <label htmlFor="username">Your  dateOfBirth</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">
                        Selct Your Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
</div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="address"
                          name="address"
                          placeholder="Your address"
                          value={formData.  address}
                          onChange={handleChange}
                        />
                        <label htmlFor="address">  address</label>
                      </div>
                    </div>

                
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="currentSchool"
                          name="currentSchool"
                          placeholder="Your currentSchool"
                          value={formData.currentSchool}
                          onChange={handleChange}
                        />
                        <label htmlFor="username">currentSchool</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control border-0"
                          id="preferredStartDate"
                          name="preferredStartDate"
                          placeholder="preferredStartDate"
                          value={formData.preferredStartDate}
                          onChange={handleChange}
                        />
                        <label htmlFor="username"> preferredStartDate</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="questionsComments"
                          name="questionsComments"
                          placeholder="Your  questionsComments"
                          value={formData.questionsComments}
                          onChange={handleChange}
                        />
                        <label htmlFor="questionsComment">Your Comments</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="howDidYouHearAboutUs">howDidYouHearAboutUs
:</label>
                      <select
                        className="form-select"
                        id="howDidYouHearAboutUs"
                        name="howDidYouHearAboutUs"
                        value={formData.howDidYouHearAboutUs}
                        onChange={handleChange}
                      >
                        <option value=""> howDidYouHearAboutUs</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Referalls">Referalls</option>
                      </select>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="gradeApplyingFor">   gradeApplyingFor</label>
                      <select
                        className="form-select"
                        id="gradeApplyingFor"
                        name="gradeApplyingFor"
                        value={formData.gradeApplyingFor}
                        onChange={handleChange}
                      >
                        <option value="">
                   Select Your Grade
                        </option>
                        <option value="2-3 years">2-3 years</option>
                        <option value="2-3 years">3-4 years</option>
                        <option value="4-5 years">4-5 years</option>
                        <option value="5-6 years">5-6 years</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Parallax>
{/* cards */}
<div className="container-xxl py-5" style={{background: 'linear-gradient(to top, white, #46f5fc)'}}>
  {/* Content goes here */}

  <div className="container">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: 600}}>
      <h1 className="mb-3">Admission Process at Gpreschool</h1>
      <p style={{color:'black'}}>The Admission process at The GpreSchool  is simple and straightforward</p>
    </div>
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col wow fadeInUp" data-wow-delay="0.2s" data-aos="fade-left">
        <div className="train-card">
          <div className="train-body">
            {/* <h5 className="card-title text-center">1</h5> */}
            <p className="card-text">Visit our website and fill up the Preschool Admission Form</p>
          </div>
          <div className="train-wheel" />
          <div className="train-wheel" />
        </div>
        <div className='train-track'/>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="0.4s" data-aos="fade-left">
        <div className="train-card">
          <div className="train-body">
            {/* <h5 className="card-title text-center">2</h5> */}
            <p className="card-text">Our admission counsellors will get in touch to understand the requirement</p>
          </div>
          <div className="train-wheel" />
          <div className="train-wheel" />
        </div>
        <div className='train-track'/>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="0.6s" data-aos="fade-left">
        <div className="train-card">
          <div className="train-body">
            {/* <h5 className="card-title text-center">3</h5> */}
            <p className="card-text">Visit the nearest the GPreschool for a guided tour</p>
          </div>
          <div className="train-wheel" />
          <div className="train-wheel" />
        </div>
        <div className='train-track'/>
      </div>
      <div className="col wow fadeInUp" data-wow-delay="0.8s" data-aos="fade-left">
        <div className="train-card">
          <div className="train-body">
            {/* <h5 className="card-title text-center">4</h5> */}
            <p className="card-text">Complete the enrollment process with assistance from our admission counsellors</p>
          </div>
          <div className="train-wheel" />
          <div className="train-wheel" />
     
        </div>
        <div className='train-track'/>
      </div>
    </div>
  </div>
</div>


        {/* cards */}

{/* cards */}
        <div>
                {/* <h1 className="mb-4 text-center">Nurturing Young Minds </h1> */}
                <div className='box'>
    <div style={{ backgroundColor: '#f0f0f0', padding: '50px 0',marginTop:'20px'}}>

  
    <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 ,marginTop:'20px'}}
            >
              <h1 className="mb-3">Program Levels at GpreSchool</h1>
          
            </div>

      <div className="container-xxl py-5">

        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card-container" style={{ margin: '0 10px', backgroundColor: '#FE7555', marginBottom:'40px',transition: 'background-color 0.3s', border: '2px solid #dddddd' }}>
                {/* Adjusted margin to add space between cards */}
                {/* <img
                  className="card-img-top img-fluid"
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  style={{ maxHeight: '400px', objectFit: 'cover', transition: 'transform 0.3s' }}
                /> */}
              
                    <video     alt={`Card ${index + 1}`}  style={{ maxHeight: '400px', objectFit: 'cover', transition: 'transform 0.3s' }} className="video-fluid w-100 bg-light p-3 masked-video" autoPlay loop muted>
                      <source src={card.image}  type="video/mp4" />
                    </video>
              
                <div className="card-body"  style={{color:'white'}}>
                  <h3 className="card-title"  style={{color:'white'}}>{card.title}</h3>
                  <p className="card-text"  style={{color:'white'}}>{card.description}</p>
                </div>
                
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>

    </div>

    </div>
   
{/* cards */}

<TestimonialCard/>
        {/* Contact End */}
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

    </div>
  );
}

