import React, { useState } from "react";
import axios from "axios";
import './Form.css'
import { client } from "../../../clientaxios/Client";

const sendFranchiseEmail = async (formData) => {
  try {
    // Send the email data to the backend endpoint
    const response = await axios.post('http://localhost:5678/api/franschise', formData);
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    state: "",
    email: "",
    mobile: "",
    City: "",
    Comments: "",
    investment: "",
    yesOrNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "username",
      "email",
      "state",
      "mobile",
      "City",
      "Comments",
      "investment",
      "yesOrNo",
    ];

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
        "/franschise",
        formData
      );
      console.log(response.data);
      setFormData({
        username: "",
        state: "",
        email: "",
        mobile: "",
        City: "",
        Comments: "",
        investment: "",
        yesOrNo: "",
      });

      // Alert for successful submission
      alert("Form submitted successfully!");
      await sendFranchiseEmail(formData)
      // Add any additional logic or UI updates upon successful submission
    }  catch (error) {
      console.error('Error submitting contact form:', error);
    
      if (error.response && error.response.data && error.response.data.error) {
        // Display specific error message from the server
        alert(`Error: ${error.response.data.error}`);
      } else if (error.response) {
        // Log the entire error object
        console.log('Complete error object:', error.response);
        // Generic error message if no specific error message is available
        alert('Error submitting the form. Please try again.');
      } else {
        // Log the entire error object
        console.log('Complete error object:', error);
        // Generic error message if no specific error object is available
        alert('Error submitting the form. Please try again.');
      }
    
      // Add error handling logic or update UI accordingly
    }
    
  };

  return (
    <div className="container-xxl py-5"style={{ backgroundImage: `url('assets/img/franchise/franform.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh' }}>
      <div className="container  glassmorphism">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="mb-3">
            Start Your Own PreSchool{" "}
            <span style={{ color: "white" }}>Franchise</span> With India's
            Leading Chain of Preschools
          </h1>
        </div>

        <div className="rounded ">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <p className="mb-4  franchise-form-title" style={{color:"black"}}>
                  <b>FRANCHISE ENQUIRY FORM</b>
                </p>
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
                        <label htmlFor="username">Your Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0 glassmorphism-input"
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
                          className="form-control border-0 glassmorphism-input"
                          id="state"
                          name="state"
                          placeholder="Your State"
                          value={formData.state}
                          onChange={handleChange}
                        />
                        <label htmlFor="state">Your state</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text" 
                          className="form-control border-0 glassmorphism-input"
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
                          className="form-control border-0 glassmorphism-input"
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
                          className="form-control border-0 glassmorphism-input"
                          id="Comments"
                          name="Comments"
                          placeholder="Your Comments"
                          value={formData.Comments}
                          onChange={handleChange}
                        />
                        <label htmlFor="username">Your Comments</label>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="investment">Investment:</label>
                      <select
                        className="form-select"
                        id="investment"
                        name="investment"
                        value={formData.investment}
                        onChange={handleChange}
                      >
                        <option value="">Select Investment</option>
                        <option value="low">15-20 lakhs</option>
                        <option value="medium">20-30lakhs</option>
                        <option value="high">Above 30lakhs</option>
                      </select>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="yesOrNo">Yes/No:</label>
                      <select
                        className="form-select"
                        id="yesOrNo"
                        name="yesOrNo"
                        value={formData.yesOrNo}
                        onChange={handleChange}
                      >
                        <option value="">
                          Are u ready with the investment that you selected
                          above?
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
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
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <video
                  className="video-fluid w-100 bg-light p-3 masked-video"
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src="assets/img/franchise/gifform.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
