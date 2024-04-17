import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contactform.css";

const ContactForm = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);

    emailjs
      .sendForm("service_kvd531t", "template_rcg36wa", form.current, {
        publicKey: "46XaQa16xEy5GXXkb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset(e);
  };
  return (
    <>
      <div className="container-fluid bg-form mt-5">
        <div className="row justify-content-center">
          <div className="col-xxl-12 col-lg-12-col-md-12 col-sm-12">
            <h2 className="mb-3 text-light text-center">
              Get in touch with our experts today
            </h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row g-3">
                {/* <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="your_name"
                    name="user_name"
                    placeholder="Your Name"
                    required
                  />
                </div> */}
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="your_email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <input
                    type="text"
                    className="form-control"
                    id="user_org"
                    name="user_org"
                    placeholder="Company"
                    required
                  />
                </div>
                <div className="col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <textarea
                    className="form-control"
                    id="your-message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
               
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="row ">
                    <div className="col-md-12 col-lg-12 col-md-12 col-sm-6 d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-sm-50 w-md-25 fw-bold"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
