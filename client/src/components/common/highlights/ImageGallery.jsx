import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {client,imageUrl} from '../../clientaxios/Client.js'
const ImageGallery = () => {
  const [events, setEvents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {



    
    fetchEvents();
  }, []);
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const fetchEvents = async () => {
    try {
      const response = await client.get('/events/getAll');
      setEvents(response.data);
      setFiltered(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filterImages = (data) => {
    let filteredData = events.filter((datas) => {
      if (datas.category === data) {
        return datas;
      }
    });
    setFiltered(filteredData);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    vertical: isVertical, // Enable vertical mode based on state
    verticalSwiping: true, // Allow vertical swiping
    swipeToSlide: true,
    slidesToShow: 3, // Adjust the number of slides to show per row as needed
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '6',
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="wow fadeIn text-center" data-wow-delay="0.5s">
            <div className="h-100 d-flex flex-column text-center justify-content-center p-5">
              {/* <h1 className="mb-4">Events</h1> */}
              <h1 className="mb-4">Events of our school</h1>

              <div className="row g-4">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <button className="btn btn-primary" onClick={() => filterImages("ANNUAL DAY")}>
                        ANNUAL DAY
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <button className="btn btn-primary" onClick={() => filterImages("SPORTS_DAY")}>
                        SPORTS DAY
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <button className="btn btn-primary" onClick={() => filterImages("TEACHERS_DAY")}>
                        TEACHERS DAY
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <button className="btn btn-primary" onClick={() => filterImages("CHILDRENS_DAY")}>
                        CHILDRENS DAY
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <button className="btn btn-primary" onClick={() => filterImages("REPUBLIC_DAY")}>
                        REPUBLIC DAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image container with slider */}
              <div className="mt-5 py-5 ">
                <Slider {...settings}>
                  {filtered && filtered.map((event, index) => (
                    <div key={index} className="col">
                      <div className="card-container" style={{margin:'0 10px'}}>
                        <img
                          style={{  margin: '0 10px',width: '100%', height: '200%', objectFit: 'cover', borderRadius: '8px' }}
                          src={`${imageUrl}/${event.imageUrl}`}
                          className="card-img-top"
                          alt={`Event ${index + 1}`}
                        />
                        <div className="card-body">
                          <h5 className="card-title"> {event.title}</h5>
                          <p className="card-text">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
