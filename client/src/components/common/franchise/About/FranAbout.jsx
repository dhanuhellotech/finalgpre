import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sumiimg from "../../../assets/sumimam.jpg";
import "./Franabout.css";
import tag from "../../../assets/tag.png";
import icon1 from "../../../assets/apartment.png";
import icon2 from "../../../assets/business.png";
import icon4 from "../../../assets/international.png";
import icon5 from "../../../assets/curriculum-vitae.png";
import { Link } from "react-router-dom";
export default function FranAbout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);
  return (
    <>
      <div className="about-container">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center py-3 px-5 mb-2  ">
              <div
                className="col-lg-6 about-img"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="row py-2 px-4 justify-content-center">
                      <div className="row-md-4 mb-5">
                        {/* Icon 1 */}
                        <div className="d-flex align-items-center ">
                          <img
                            src={icon1}
                            alt="Icon 1"
                            style={{ width: "75px" }}
                          />
                          <h2 className="ms-2">Ultra-High Returns</h2>
                        </div>{" "}
                      </div>
                      <div className="row-md-4 mb-5">
                        {/* Icon 2 */}
                        <div className="d-flex align-items-center">
                          <img
                            src={icon2}
                            alt="Icon 2"
                            style={{ width: "75px" }}
                          />
                          <h2 className="ms-2">Proven Business Model</h2>
                        </div>{" "}
                      </div>
                
                      <div className="row-md-4 mb-5">
                        {/* Icon 3 */}
                        <div className="d-flex align-items-center">
                          <img
                            src={tag}
                            alt="Icon 3"
                            style={{ width: "75px" }}
                          />
                          <h2 className="ms-2">Friendly Pricing</h2>
                        </div>{" "}
                      </div>
                      <div className="row-md-4 mb-5">
                        {/* Icon 3 */}
                        <div className="d-flex align-items-center">
                          <img
                            src={icon4}
                            alt="Icon 4"
                            style={{ width: "75px" }}
                          />
                          <h2 className="ms-2">Support to Franchisees</h2>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6"
             
              >
                <h1 className="mb-5 text-head">START YOUR OWN PRESCHOOL</h1>
                <p className="para-head">
                  <b>EXPLORE FRANCHISE OPPORTUNITIES</b>
                </p>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "23px",
                    fontWeight: "bold",
                    color:'#FE7251'
                  }}
                >
                  GpreSchool has served more than 2,00,000 families since it's
                  inception. The Preschool has been recognized as the best
                  Preschool in India, time and again. GpreSchool Play School has
                  been at the forefront of bringing innovative products in the
                  early child care and education space in India. Our unique
                  Seven-Petal preschool curriculum ensures holistic development
                  of every child based on sequential learning and development
                  milestones. Partner with us to seek higher returns on low
                  investments.
                </p>
                <div className="row g-4 align-items-center">
                  <div className="col-sm-6">
            
                    <Link  className="btn btn-primary rounded-pill py-3 px-5" to='/'>    Read More</Link>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src={sumiimg}
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Sumi Mam</h6>
                        <small>CEO & Founder</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
