import React from "react";
import imgfirst from "../../assets/banner/001.jpg";
import imgsecoent from "../../assets/banner/002.jpg";
import imgthree from "../../assets/banner/003.jpg";
import imgfour from "../../assets/banner/004.jpg";
import "./homebanner.css";

const HomeBanner = () => {
  return (
    <>
    {/* <!-- Heading --> */}
    <div className="container carousel-text mt-4 d-block d-md-none">
      <div className="row">
        <div className="col text-center">
          <h3>CORROSION CONTROL & INSPECTION SERVICES</h3>
        </div>
      </div>
    </div>
    
    {/* <!-- Carousel --> */}
    <div
      id="carouselExampleIndicators"
      className="carousel slide d-block d-md-none"
      data-bs-ride="carousel"
      data-bs-interval="1000"
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
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active h-50">
          <img src={imgfirst} className="d-block w-100 position-relative" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imgsecoent} className="d-block w-100 position-relative" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imgthree} className="d-block w-100 position-relative" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imgfour} className="d-block w-100 position-relative" alt="..." />
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
    
    </>
  );
};

export default HomeBanner;
