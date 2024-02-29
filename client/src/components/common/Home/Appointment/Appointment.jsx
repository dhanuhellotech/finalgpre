import React, { useState } from 'react';
import axios from 'axios';
import './Appointment.css'
const sendEmail = async (formData) => {
  try {
    // Send the email data to the backend endpoint
    const response = await axios.post('http://localhost:5678/api/enquiry', formData);
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    Address: '',
    state: '',
    childname: '',
    childgrade: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
 
  const handleSubmit = async (e) => {
    e.preventDefault();



   // Set form submission status to true

      // Validate form data
      const requiredFields = ['username', 'email', 'mobile', 'Address', 'state', 'childname', 'childgrade', 'message'];
      const missingFields = requiredFields.filter(field => !formData[field]);

      if (missingFields.length > 0) {
        alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
        return; // Stop form submission if any required field is missing
      }
try{
      // If all required fields are filled, proceed with form submission
      const response = await axios.post('http://localhost:5678/enquiry', formData);
      console.log(response.data);
 

      // Reset form data after successful submission
      setFormData({
        username: '',
        email: '',
        mobile: '',
        Address: '',
        state: '',
        childname: '',
        childgrade: '',
        message: '',
      });

      alert('Enquiry form submitted successfully!');
      await sendEmail(formData);
    }  catch (error) {
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
  }
  

  return (
    <div>
        <div className="container-xxl py-5" style={{ backgroundImage: `url('assets/img/wall.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh',marginTop:'5%' }}>
    <div className="container" >
    <div className="container glassmorphism"> 
      <div className="rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4"style={{fontFamily:'monospace',fontSize:'60px'}}>ENQUIRY FORM</h1>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <input
                          type="text"
                          className="form-control border-0 glassmorphism-input"
                          id="username"
                          name="username"
                          placeholder="Your Name"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      <label htmlFor="gname">username</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <input
                          type="text"
                          className="form-control border-0 glassmorphism-input "
                          id="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      <label htmlFor="gmail">email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <input
                          type="text"
                          className="form-control border-0 glassmorphism-input "
                          id="mobile"
                          name="mobile"
                          placeholder="Your mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                      <label htmlFor="number">mobile</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <input
                          type="text"
                          className="form-control border-0 glassmorphism-input "
                          id="Address"
                          name="Address"
                          placeholder="Your Address"
                          value={formData.Address}
                          onChange={handleChange}
                        />
                      <label htmlFor="gmail">Address</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <input
                          type="text"
                          className="form-control border-0 glassmorphism-input "
                          id="state"
                          name="state"
                          placeholder="Your state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      <label htmlFor="gmail">state</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <input
                          type="text"
                          className="form-control border-0 glassmorphism-input"
                          id="childname"
                          name="childname"
                          placeholder="Your childname"
                          value={formData.childname}
                          onChange={handleChange}
                        />
                      <label htmlFor="cname">child name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <input
                          type="text"
                          className="form-control border-0 glassmorphism-input"
                          id="childgrade"
                          name="childgrade"
                          placeholder="Your Name"
                          value={formData.childgrade}
                          onChange={handleChange}
                        />
                      <label htmlFor="cage">child grade</label>
                    </div>
                  </div>
                  <div className="col-12">
                 
                  </div>
                     <div className="form-floating">
                    <input
                          type="text"
                          className="form-control border-0 glassmorphism-input"
                          id="message"
                          name="message"
                          placeholder="Your message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      <label htmlFor="message">Message</label>
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
              <img className="position-absolute w-100 h-100 rounded" src="assets/img/circlelogo-removebg-preview.png"  style={{objectFit:"fill"}} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    </div>
  )
}
