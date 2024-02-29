import React from 'react';
import icon1 from '../../../assets/emotions.png';
import icon2 from '../../../assets/passion.png';
import icon3 from '../../../assets/size.png';
import icon4 from '../../../assets/investment.png';
import icon5 from '../../../assets/business.png';
import icon6 from '../../../assets/long-term-success.png';
import './banner.css'
const Banner = () => {
  const containerStyle = {
    backgroundImage: `url("assets/img/franchise/banner2.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '550px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end', // Align content to the left
    position: 'relative',
    //paddingRight: '55px',
   // Add padding to the left
  };

  return (
    <div style={{margin:'0',padding:'0'}}>
        <h2 className="text-center  mb-4 .text-head"style={{fontFamily:'monospace'}}>TO GET STARTED,ALL YOU NEED IS...</h2>
    <div className="container" style={containerStyle}>
      {/* Left Section */}
      <div className="row mb-2">
        <div className="col-md-4 text-center">
          <img className='img-new' src={icon1} alt="Icon 1" style={{ width: '55px', height: '55px' }} />
          <h1 style={{ color: 'white' }}>Love</h1>
          <p style={{ color: 'white' }}>for children and budding learners</p>
        </div>
        <div className="col-md-4 text-center">
          <img  className='img-new' src={icon2} alt="Icon 2" style={{ width: '55px' }} />
          <h1 style={{ color: 'white' }}>Passion</h1>
          <p style={{ color: 'white' }}>for growth and entrepreneurial spirit</p>
        </div>
        <div className="col-md-4 text-center">
          <img  className='img-new' src={icon3} alt="Icon 3" style={{ width: '55px', height: '55px' }} />
          <h1 style={{ color: 'white' }}>2000-2500 sq. ft</h1>
          <p style={{ color: 'white' }}>preferably on the ground floor in a residential locality</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="row mb-4">
        <div className="col-md-4 text-center">
          <img  className='img-new' src={icon4} alt="Icon 4" style= {{ width: '55px', height: '55px' }} />
          <h1 style={{ color: 'white' }}>Rs. 15-20 lakhs</h1>
          <p style={{ color: 'white' }}>Investment capability</p>
        </div>
        <div className="col-md-4 text-center">
          <img  className='img-new' src={icon5} alt="Icon 5" style={{ width: '55px', height: '55px' }} />
          <h1 style={{ color: 'white' }}>Business </h1>
          <p style={{ color: 'white' }}>with a long term vision in mind</p>
        </div>
        <div className="col-md-4 text-center">
          <img  className='img-new' src={icon6} alt="Icon 6" style={{ width: '55px', height: '55px' }} />
          <h1 style={{ color: 'white' }}>Long-Term Success</h1>
          <p style={{ color: 'white' }}>Commitment</p>
        </div>
      </div>

      {/* Bottom Section with Wave Image */}
    </div>
    </div>
  );
};

export default Banner;
