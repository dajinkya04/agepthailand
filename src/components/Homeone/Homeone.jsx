import React from "react";
import "./Homestyle.css";
import banner from "../../assets/banner/01.jpg";
import bannerTwo from "../../assets/banner/2.jpg";
import bannerThree from "../../assets/banner/3.jpg";
import bannerFour from "../../assets/banner/4.jpg";
import thaione from '../../assets/thailand_icons/tha1.png'
import thaitwo from '../../assets/thailand_icons/tai2.png'
import thaithree from '../../assets/thailand_icons/thai3.png'
import thaifour from '../../assets/thailand_icons/thai4.png'
import thaifive from '../../assets/thailand_icons/thai5.png'
import FacebookAuth from "../FacebookAuth/FacebookAuth";
import ContactForm from "../ContactForm/ContactForm";
import FacebookPosts from "../FacebookAuth/Facebook";
import HomeBanner from "../HomeMobileBanner/HomeBanner";





const Homeone = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row d-none d-md-flex">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="row">
                <div className="col-xxl-12 col-lg-12 col-lg-12 vertical-align">
                  <p className="big-text text-end">
                    <div>Corrosion</div>
                    <div>Control</div>
                    <div>& Inspection</div>
                    <div>Services</div>
                  </p>
                </div>
                <div className="col-xxl-12 col-lg-12 col-lg-12 home-text">
                  <div className="content">
                    <p>Your unparalleled partner for expertise & innovation</p>
                    <button className="btn btn-warning">Contact Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active h-50">
                    <img src={banner} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={bannerTwo} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={bannerThree}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img src={bannerFour} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <HomeBanner />
      </section>
      {/* --------------------Home Slider Section End ---------------------*/}
      <section>
        <div className="container icon-section mt-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-xxl-2 col-xl-2 col-lg-1-5 col-md-1-5 col-sm-6">
              <div className="card-view text-center w-100">
                <h6>Corrosion Control</h6>
                <img src={thaione} alt="icon" className="img-fluid"  />
              </div>
              <p className="mt-2">
                We offer customized corrosion solutions for infrastructure,
                covering assessments, maintenance, compliance, training, risk management,
                and continuous improvement.
              </p>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-1-5 col-md-1-5 col-sm-6">
              <div className="card-view text-center">
                <h6>Inspection</h6>
                <img src={thaitwo} alt="icon2" className="img-fluid" />
              </div>
              <p className="mt-2">
                Our experts conduct thorough inspections, ensure compliance with
                industry standards, offer
                guidance on maintenance, comprehensive reporting, and corrective measures.
              </p>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-1-5 col-md-1-5 col-sm-6">
              <div className="card-view text-center">
                <h6>Product Management</h6>
                <img src={thaithree} alt="icon3" className="img-fluid" />
              </div>
              <p className="mt-2">
                Involves selecting, procuring, applying, and maintaining
                corrosion prevention products to protect assets. It includes
                proper application, regular maintenance, and compliance with regulations.
              </p>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-1-5 col-md-1-5 col-sm-6">
              <div className="card-view text-center">
                <h6>Traning</h6>
                <img src={thaifour} alt="icon4" className="img-fluid" />
              </div>
              <p className="mt-2">
                Our industry-leading Quality Control training program provides
                hands-on experience, expert guidance, and cutting-edge
                methodologies. It fortifies industries with top-tier coating
                quality control standards.
              </p>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-1-5 col-md-1-5 col-sm-6">
              <div className="card-view text-center">
                <h6>Audit</h6>
                <img src={thaifive} alt="icon5" className="img-fluid" />
              </div>
              <p className="mt-2">
                We ensure compliance and efficiency across operations. They
                identify areas for improvement, assess risks, and uphold quality
                standards, promoting organizational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <span className="banner-home"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-md-5">
        <FacebookPosts />
        <FacebookAuth />
        <div
          className="fb-post"
          href="https://www.facebook.com/20531316728/posts/10154009990506729/"
        ></div>
      </section>

      <section>
        <ContactForm />
      </section>
    </>
  );
};

export default Homeone;
