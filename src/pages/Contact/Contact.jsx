import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'


const Contact = () => {
 
  return (
    <>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
          <ContactForm />
        </div>

      </div>
    </div>
     <Footer />
    </>
  )
}

export default Contact