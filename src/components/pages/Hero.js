import React from 'react'

import Header from '../common/Header'
import "../../assets/style/common.css"
import arroIcon from "../../assets/image/png/arrowIcon.png"
import heroImage from "../../assets/image/png/Rectangle 156.png"

function Hero() {
  return (
    <main className="">
      <Header />

      <section className=" hero_bgImg">
        <div className="container z_index_100">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-6 col-12 mt-4 pt-5 order-2 order-lg-0 justify-content-center align-items-center"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h2 className="heading main-heading">Empower Your Business <span className='text_heading'>Finances</span>  </h2>
                <p className="para pt-4">
                  Your Expert Partner in Swift Business Financing, Bridging Gaps, and Ensuring Success. Thrive with Us!
                </p>

                <div className="pt-5">
                  <p className="sub-title">
                    Discover More <img src={arroIcon} />
                  </p>
                </div>
              </div>

            </div>
            <div
              className="col-lg-6 col-12 d-flex mt-4  justify-content-center align-items-center"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div>
                <img
                  className="w-100 Images_updown_animations"
                  src={heroImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
