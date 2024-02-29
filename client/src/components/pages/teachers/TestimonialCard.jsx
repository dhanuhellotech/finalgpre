import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const TestimonialCard = ({ testimonials }) => {
  return (
    <Carousel>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className="card">
            <div className="row">
              <div className="col-md-4">
                <img src={testimonial.image} className="card-img-top" alt="Teacher" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{testimonial.name}</h5>
                  <p className="card-text"><strong>About me:</strong> {testimonial.about}</p>
                  <p className="card-text"><strong>Home town:</strong> {testimonial.hometown}</p>
                  <p className="card-text"><strong>Birthday:</strong> {testimonial.birthday}</p>
                  <p className="card-text"><strong>Degree:</strong> {testimonial.degree}</p>
                  <p className="card-text"><strong>Hobby:</strong> {testimonial.hobby}</p>
                  <p className="card-text"><strong>Teaching goal:</strong> {testimonial.teachingGoal}</p>
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
  // Testimonial data
  const [testimonials] = useState([
    {
      name: 'Nazreen.I',
      image: 'teacher1.jpg', // Path to the teacher's image
      about: 'As a educator, I believe that learning is based on real-world experiences. From experiential learning students construct their own understanding.',
      hometown: 'Madurai',
      birthday: 'April 17',
      degree: 'B.A psychology and sociology, Advanced diploma in Montessori',
      hobby: 'Drawing, listening to songs and reading books',
      teachingGoal: 'Having a positive relationship with the students and making them feel the classroom as their home and teacher as their mother.'
    },
    // Add more testimonials as needed
  ]);

  return (
    <div>
      <div className="container-xxl bg-white p-0">
        {/* Your other components and code */}
        {/* Testimonial Cards */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <TestimonialCard testimonials={testimonials} />
            </div>
          </div>
        </div>
        {/* Testimonial Cards End */}
        {/* Your other components and code */}
      </div>
    </div>
  );
}
