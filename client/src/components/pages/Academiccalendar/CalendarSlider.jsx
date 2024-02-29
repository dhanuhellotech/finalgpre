import React from 'react';
import Slider from 'react-slick';
import CalendarCard from './CalendarCard';

const CalendarSlider = ({ months }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {months.map((month, index) => (
        <div key={index}>
          <CalendarCard month={month.name} events={month.events} />
        </div>
      ))}
    </Slider>
  );
};

export default CalendarSlider;
