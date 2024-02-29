
import React, { useEffect } from 'react';
export default function Classcard() {

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxContainer = document.querySelector('.parallax-container');
      if (parallaxContainer) {
        parallaxContainer.style.backgroundPositionY = `${scrollTop * 0.5}px`; // Adjust the speed of parallax effect by changing the multiplier
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <div className="container-xxl py-5 parallax-container" style={{ backgroundImage: `url('assets/img/white-brick-wall-textures-background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3" style={{color:'#FE6642'}}>Nurturing Young Minds </h1>
        <p className="mb-3" style={{fontFamily:'sans-serif',fontWeight:'bolder',color:'black'}}>We want to support every child’s own natural
learning path and give them the freedom for
creative thinking. </p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="assets/img/classes-1.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Evaluation &amp; Assessment</a>
              {/* <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div> */}
              <div className="row g-1">
                <div className="col-10">
                  <div className="border-top border-3 border-primary pt-2">
               <p style={{fontWeight:'900'}}>Daily Activities uploaded in social Media Direct teacher updates. Bi-yearly Assessments</p>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="assets/img/classes-2.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>STEM</a>
              {/* <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div> */}
              <div className="row g-1">
                <div className="col-10">
                  <div className="border-top border-3 border-primary pt-2">
               <p style={{fontWeight:'900'}}>Stem experience can clearly do
wonders for social skills and life skills in general too.</p>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="assets/img/classes-3.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Game Schooling</a>
              {/* <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div> */}
              <div className="row g-1">
                <div className="col-10">
                  <div className="border-top border-3 border-primary pt-2">
               <p style={{fontWeight:'900'}}> It allows them to
experiment through trial and error, find
solutions to problems, work out the best
strategies, and build new confidence and skills.</p>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="assets/img/classes-4.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Physical Development and Wellness Awareness</a>
              {/* <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div> */}
              <div className="row g-1">
                <div className="col-10">
                  <div className="border-top border-3 border-primary pt-2">
               <p style={{fontWeight:'900'}}> high academic performance in children physical activity and wellness development.strong cognitive and physical development</p>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="assets/img/classes-5.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Literacy, Communication and Language</a>
              {/* <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div> */}
              <div className="row g-1">
                <div className="col-10">
                  <div className="border-top border-3 border-primary pt-2">
               <p style={{fontWeight:'900'}}> G Preschool offers a socially and intellectually engaging
environment where children’s communicative practices,
languages, literacies and literate identities are valued and
supported.</p>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="classes-item">
            <div className="bg-light rounded-circle w-75 mx-auto p-3">
              <img className="img-fluid rounded-circle" src="assets/img/classes-6.jpg" alt />
            </div>
            <div className="bg-light rounded p-4 pt-5 mt-n5">
              <a className="d-block text-center h3 mt-3 mb-4" href>Cultural Awareness and Diversity</a>
              {/* <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <img className="rounded-circle flex-shrink-0" src="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
                  <div className="ms-3">
                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                    <small>Teacher</small>
                  </div>
                </div>
                <span className="bg-primary text-white rounded-pill py-2 px-3" href>$99</span>
              </div> */}
              <div className="row g-1">
                <div className="col-10">
                  <div className="border-top border-3 border-primary pt-2">
               <p style={{fontWeight:'900'}}>Cultural Awareness and Diversity
Children will become socially responsible citizens sensitive to
equitable and democratic practices that deepen their sense of
cultural identity.</p>
                  </div>
                </div>
              
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
