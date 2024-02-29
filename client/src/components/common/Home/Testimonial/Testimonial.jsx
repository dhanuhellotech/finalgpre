import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const awardsData = [
    { image: 'assets/img/awards/Award 1.png', text: 'Award 2019-2' },
    { image: 'assets/img/awards/Award 2.png', text: 'Award 2018-1' },
    { image: 'assets/img/awards/Award 3.png', text: 'Award 2018-1' },
    // Add more data as needed
  ];

  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isVertical ? 1 : 4, // Adjust number of slides shown based on orientation
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: isVertical, // Set to true if orientation is vertical
    verticalSwiping: isVertical, // Set to true if orientation is vertical
  };

  return (
    <div className="container-xxl py-5 parallax-container">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
          <h1 className="mb-3" style={{ color: '#FE6642' }}>Awards And Recognition</h1>
        </div>
        <Slider {...sliderSettings}>
          {awardsData.map((award, index) => (
            <div key={index} className={isVertical ? "mb-4" : "col-lg-4 col-md-6"}>
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img className="img-fluid rounded-circle" src={award.image} alt={award.text} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
