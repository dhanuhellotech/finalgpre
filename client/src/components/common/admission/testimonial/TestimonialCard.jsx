// TestimonialCard.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialCard.css';

const testimonialData = [
  {
    id: 1,
    content: 'The online classes conducted are engaging. My child looks forward to attending the sessions every day. With Little Millennium, I am confident that my child is getting the best early childhood grooming.',
    author: 'John Doe',
    position: 'Gpreschool,Madurai',
  },
  {
    id: 2,
    content: 'Meeting all the classmates via a single window has been a unique experience for my child. With the app, we can keep a proper track of child development A worry free learning experience.',
    author: 'John Doe',
    position: 'Gpreschool,Madurai',
  },
  {
    id: 3,
    content: 'A big thank you to the entire team at Little Millennium for their efforts towards conducting online sessions, activities and ensuring that my son never miss out on learning during the pandemic.',
    author: 'John Doe',
    position: 'Gpreschool,Madurai',
  },
  // Add more testimonial data as needed
];

const TestimonialCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial-slider-container"style={{ backgroundImage: `url('assets/img/highlithsvideo/event.jpg')`, backgroundSize: 'cover', }}>

<div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <h1 className="mb-3">What Parents Say</h1>
            </div>
          </div>
      <Slider {...settings}>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-content">"{testimonial.content}"</div>
            <div className="testimonial-author">
              <p>{testimonial.author}</p>
              <p>{testimonial.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCard;
