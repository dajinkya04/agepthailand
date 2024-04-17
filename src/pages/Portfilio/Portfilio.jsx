import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./portfilio.css";
import bg from "../../assets/Porifilio/port01.jpg";
import bgfour from "../../assets/Porifilio/04.jpg";

import ContactForm from "../../components/ContactForm/ContactForm";
import Gallery from "../../components/Homeone/Galleryimg";

const Portfilio = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container-fluid main-con">
          <div className="row text-light">
            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6 text-bot">
              <span>Discover Excellence</span>
              <p>in Product Management & Trading with AGEP Thailand</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container sub-main">
          <h2 className="text-center mt-5">Recent Project</h2>
          <p className="text-center">
            We help companies soar to success with quality control
          </p>
          <div className="row sub-row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 py-5">
              <img src={bg} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 sub-text py-5">
              <h3>Scaffolding Inspection in Oil Facilities</h3>
              <p>
                Axial Group is actively conducting scaffolding inspection and
                certification tasks across multiple refineries in India. With a
                team of 25 highly skilled and certified scaffolding inspectors,
                they ensure the utmost safety measures are in place during any
                work conducted at heights. Our inspectors are rigorously trained
                to identify potential risks, faults, and weaknesses in
                scaffolding structures, ensuring that workers can perform their
                tasks securely and efficiently. By adhering to strict industry
                regulations and employing their extensive knowledge and
                expertise, Axial Group guarantees a safe working environment for
                all individuals involved in refinery operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container sub-rowtwo">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 text-subdatatwo"></div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <h2>Coating Inspection in OE Facilities</h2>
              <p>
                Axial Group ensures equipment's longevity with precise coating
                inspections. Using cutting-edge technology and expertise, we
                assess coating quality as per the leading industry standards and
                certifications, ensuring specification compliance each time. Our
                meticulous evaluations and tailored recommendations optimize
                equipment durability, prevent failures, and cut costs. This
                commitment not only safeguards assets but also reduces
                environmental impact, reinforcing operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pro-subthree mt-3">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 py-5">
              <h2>
                Coating Inspection Training Programs for a Reputed Paint
                Manufacturer
              </h2>
              <p>
                Axial Group's Basic Coating Quality Control training program
                stands as a beacon of excellence in the realm of protective
                coatings. Tailored to empower industry professionals with
                comprehensive knowledge, this program encompasses cutting-edge
                methodologies, industry best practices, and hands-on
                experiences. Led by seasoned experts, it equips participants
                with a deep understanding of coating applications, inspection
                techniques, and quality control measures. Axial Group's
                commitment to fostering expertise not only elevates individual
                skill sets but also fortifies industries by promoting the
                highest standards of coating quality control across diverse
                sectors.
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 sub-text py-5">
              <img src={bgfour} alt="" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pro-four mt-3">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pro-subfour"></div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <h2> Concrete Coating Inspection in a Power Plant</h2>
              <p>
                Axial Group, renowned for its expertise in Concrete Coating
                Inspection, recently fortified a power plant's DM Water
                facility. Our certified inspectors meticulously evaluated
                coating integrity, employing industry-leading standards. Our
                team's expertise ensures the longevity of applied coatings,
                assuring a prolonged service life for the power plant's
                infrastructure. Axial Group's commitment to precision and
                certified inspectors underscores our dedication to excellence in
                safeguarding critical facilities. This meticulous approach
                guarantees optimal protection, fortifying the power plant's
                infrastructure against wear, and ensuring sustained operational
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section>
        <Gallery />
      </section>

      <ContactForm />
      <Footer />
    </>
  );
};

export default Portfilio;
