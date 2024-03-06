import React from 'react';

import "../../assets/style/common.css";
import Email from "../../assets/image/svg/Mail.svg";
import Location from "../../assets/image/svg/location.svg";
import phoneNumber from "../../assets/image/svg/Number.svg";
import contactImage from "../../assets/image/png/contactImage.png";

function Contact() {
  return (
    <section className='contact-background py-5' >
      <div className="container py-5" >
        <div className="row justify-content-center align-items-center">
          <div
            className="col-lg-6 col-12 mt-4 pt-5 order-2 order-lg-0 justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div>
              <h2 className="contact_heading ">
                Let’s Get In

                <span className='text_heading'>{" "}Touch With Us</span>  </h2>
              <p className="para pt-4">
                Your Expert Partner in Swift Business Financing, Bridging Gaps, and Ensuring Success. Thrive with Us!
              </p>

              <div className="pt-5">
                <ul className='list-unstyled'>
                  <li className='my-3'>
                    <img src={phoneNumber} alt='mobile number' />
                    <span className='contact_text px-3 text-align-center'>+ 91 71-0544338866</span></li>
                  <li className='my-3'><img src={Email} alt='Email' />   <span className='contact_text px-3 text-align-center'>info@unifiedinvestments.ae</span></li>
                  <li className='my-3'>

                    <img src={Location} alt='Location' />
                    <span className='contact_text px-3 text-align-center'>
                      Unified Investments, 2nd floor, Al Amal St - </span>
                    <br />  <span className='contact_text pl-5 ml-5 m-auto'> Business Bay-Dubai, United Arab Emirates</span>
                  </li></ul>
              </div>
            </div>

          </div>
          <div
            className="col-lg-6 col-12 d-flex mt-4  justify-content-center align-items-center"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div>
              <img
                className="w-100 Images_updown_animations"
                src={contactImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
