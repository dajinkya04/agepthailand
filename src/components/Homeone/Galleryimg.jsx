import React from "react";
import "./gallery.css";
import { Image2, Images, upImage } from "../../assets/galleryimg";


const Gallery = () => {
  return (
    <>
      <section>
        <div className="container-fluid gallery">
          {/* <h2 className="text-secondary">Services</h2>
          <p> Your Quality Conundrums, Our Expert Solutions</p> */}
          <div className="row sub-gallery">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
              {Images.map((item) => (
                <a href="/#" className="d-block">
                  <img className="img-fluid" src={item.src} alt="" />
                </a>
              ))}
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 sub-img">
              {upImage.map((item) => (
                <a href="/#" className="d-block">
                  <img className="img-fluid" src={item.src} alt="" />
                </a>
              ))}
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
              {Image2.map((item) => (
                <a href="/#" className="d-block">
                  <img className="img-fluid" src={item.src} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
