import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card.css';

const CardSlide = () => {
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Sample data for circular cards
  const cardsData = [
    { id: 1, text: '750 Preschools' },
    { id: 2, text: '150 cities' },
    { id: 3, text: '200k Happy Children' },
    { id: 4, text: '15+ Years of Expertise' },
    // Add more cards as needed
  ];

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1,
    vertical: isVertical, // Enable vertical mode based on state
    verticalSwiping: true, // Allow vertical swiping
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '6', // Set to '0' to remove space between circular cards
  };

  const containerStyle = {
    minHeight: '200px',
    marginTop: '50px', // Adjust the height as needed
  };

  return (
    <div className="container-xxl" style={containerStyle}>
      <h2 className="text-center mb-4 text-head">INDIA'S LEADING CHAIN OF PRESCHOOLS</h2>

      <Slider {...sliderSettings}>
        {cardsData.map((card) => (
          <div key={card.id} className="text-center">
            <div className="circular-card">
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlide;
