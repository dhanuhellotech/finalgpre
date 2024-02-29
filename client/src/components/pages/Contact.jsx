import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import WhatsApp from '../whatsapp/WhatsApp';
import FloatingMailIcon from './email floating icon/Floating';
import { client } from '../clientaxios/Client';
const sendContactEmail = async (formData) => {
  try {
    // Send the email data to the backend endpoint
    const response = await client.post('/api/contact', formData);
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export default function Contact() {
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    location: '',
    mobile: '',
    City: '',
    Comments: '',
  });
  const fetchAddresses = async () => {
    try {
      const response = await client.get('/api/addresses');
      setAddresses(response.data);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  useEffect(() => {
    // Fetch addresses on component mount
    fetchAddresses();

    fetchDefaultAddress();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = 
    ['username', 'email', 'location','mobile','City','Comments'];

    // Check if any required field is empty
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return; // Stop form submission if any required field is missing
    }
    try {
      const response = await client.post('/contacts', formData);
      console.log(response.data);
      setFormData({
        username: '',
        email: '',
        location: '',
        mobile: '',
        City: '',
        Comments: '',
      });
  
      // Alert for successful submission
      alert('Form submitted successfully!');
      await sendContactEmail(formData);
      // Add any additional logic or UI updates upon successful submission
    } catch (error) {
      console.error('Error submitting contact form:', error.response.data);
  
      if (error.response && error.response.data && error.response.data.error) {
        // Display specific error message from the server
        alert(`Error: ${error.response.data.error}`);
      } else {
        // Generic error message if no specific error message is available
        alert('Error submitting the form. Please try again.');
      }
  
      // Add error handling logic or update UI accordingly
    }
  };
  

  const fetchDefaultAddress = async () => {
    // Fetch your default address from the backend and update the state
    try {
      const response = await client.get('/api/default-address');
      setAddresses([response.data]);
    } catch (error) {
      console.error('Error fetching default address:', error);
    }
  };
  return (
  
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar Start */}
<Navbar/>
  {/* Navbar End */}
  {/* Page Header End */}
  <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">
      <h1 className="display-2 text-white animated slideInDown mb-4">Contact Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        {/* <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
        </ol> */}
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Get In Touch</h1>
        <p>We're thrilled that you've made your way to our contact page! Your thoughts, questions, and feedback are important to us, and we're here to make sure your experience with us is exceptional.</p>
      </div>
      <div className="row g-4 mb-5">
  {addresses.map((address) => (
    <React.Fragment key={address._id}>
      <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: 75, height: 75 }}>
          <i className="fa fa-map-marker-alt fa-2x text-primary" />
        </div>
        <h6>{address.address}</h6>
      </div>
      <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: 75, height: 75 }}>
          <i className="fa fa-envelope-open fa-2x text-primary" />
        </div>
        <h6>{address.email}</h6>
      </div>
      <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: 75, height: 75 }}>
          <i className="fa fa-phone-alt fa-2x text-primary" />
        </div>
        <h6>{address.phone}</h6>
      </div>
    </React.Fragment>
  ))}
</div>

      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
            <h1 className="mb-3">Contact Form</h1>              <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="username"
                          name="username"
                          placeholder="Your Name"
                          value={formData.username}
                          onChange={handleChange}
                        />
                        <label htmlFor="username">Your Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="email"
                          name="email"
                          placeholder="Your Name"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <label htmlFor="username">Your email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="location"
                          name="location"
                          placeholder="Your location"
                          value={formData.location}
                          onChange={handleChange}
                        />
                        <label htmlFor="username">Your location</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="mobile"
                          name="mobile"
                          placeholder="Your mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                        <label htmlFor="username">Your mobile</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="City"
                          name="City"
                          placeholder="Your City"
                          value={formData.City}
                          onChange={handleChange}
                        />
                        <label htmlFor="username">Your City</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="Comments"
                          name="Comments"
                          placeholder="Your Comments"
                          value={formData.Comments}
                          onChange={handleChange}
                        />
                        <label htmlFor="username">Your Comments</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit"
                       onClick={handleSubmit}>
                        Send Message
                        </button>
                    </div>
                  </div>
                </form>
                    
          
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.0231418444205!2d78.09115263329748!3d9.916409223677716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58f98cfb84d%3A0xddf422783990efbc!2sthegpreschool%20%20-%20Madurai%20-%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707893671883!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
 <Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services."/>
  <FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 

</div>


  )
}