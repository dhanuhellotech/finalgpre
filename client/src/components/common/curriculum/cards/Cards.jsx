import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cards.css'; // Import your external CSS file

export default function Classcard() {
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
      image: 'assets/img/curriculum/card2 (2).jpeg',
    },
    {
      title: 'UKG (5 to 6 years)',
      description:
       'Children are guided in the literacy and numeracy skills they need for big school all while building 21st-century skills like communication,collaboration, creativity and critical thinking.',
      image: 'assets/img/curriculum/395176927_672817854825950_7506696205863520627_n.jpg',
    },
    {
      title: 'LKG (4 to 5 years)',
      description:
        'Children continue to be guided in the executive functioning skills they need to be able to complete tasks all while learning through hands-on and engaging activities.',
      image: 'assets/img/curriculum/394562384_238991408857558_6630068315573485841_n.jpg',
    },
    {
      title: 'Prekg (3 to 4 years)',
      description:'Older toddlers continue to work on their soft skills while also being guided in the academic skills they will need to start reading, writing, and increase their vocabulary.',
      image: 'assets/img/curriculum/card2.jpeg',
    },
    // Add more card data as needed
  ];

  return (
    <div>
                {/* <h1 className="mb-4 text-center">Nurturing Young Minds </h1> */}

    <div style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
           

      <div className="container-xxl py-5">

        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card-container" style={{ margin: '0 10px', backgroundColor: '#FE7555', transition: 'background-color 0.3s', border: '2px solid #dddddd' }}>
                {/* Adjusted margin to add space between cards */}
                <img
                  className="card-img-top img-fluid"
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  style={{ maxHeight: '400px', objectFit: 'cover', transition: 'transform 0.3s' }}
                />
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
  );
}
