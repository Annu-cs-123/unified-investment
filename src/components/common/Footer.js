import React from "react";

import "../../assets/style/common.css"
import email from "../../assets/image/svg/Mail.svg"
import phoneImage from "../../assets/image/svg/Number.svg"
import FacebookIcon from "../../assets/image/svg/facebook.svg";
import InstagramIcon from "../../assets/image/svg/InstaIcon.svg";
import LinkedinIcon from "../../assets/image/svg/LinkedIN.svg";
import FooterLogo from "../../assets/image/png/Unified Investment logo.png"
import Media from "./Media";

function Footer() {
  return (
    <>
      <section className="position-relative">
        <div className="position-absolute img_media">
          <Media />
        </div>
        <div className="container z_index_100 py-5 my-lg-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3 py-4 align-items-center justify-content-center"
              data-aos="fade-left"
              data-aos-duration="2000">
              <a href="#">
                <img className="w-100" src={FooterLogo} alt="" /> </a>


            </div>

            <div className="col-lg-3  py-4 align-items-center justify-content-center"
              data-aos="fade-left"
              data-aos-duration="2000">
              <a
                className="text-decoration-none footer-text"
                href="/"
              >
                Menu
              </a>

            </div>


            <div className="col-lg-3  py-4 align-items-center justify-content-center"
              data-aos="fade-left"
              data-aos-duration="2000">
              <a
                className="text-decoration-none  footer-text "
                href="/"
              >
                Useful link
              </a>


            </div>

            <div className="col-lg-3 py-4 align-items-center justify-content-center"
              data-aos="fade-left"
              data-aos-duration="2000">
              <a
                className="text-decoration-none footer-text "
                href="/"
              >
                Follow us
              </a>

            </div>


          </div>
          <div className="row justify-content-between ">
            <div className="col-lg-3  align-items-center justify-content-center"
              data-aos="fade-left"
              data-aos-duration="2000">
              <div className="">
                <p className="footer-para-list">Interior Design Center Inc. A USA Based Photo Editing Company in Tokyo, Japan. Corporation NO. 524172-2,  Check Here.</p>
                <img src={phoneImage} /><span className="footer-para-list ms-3">+88(019)04-000012</span>
                <br />
                <img src={email} /><span className="footer-para-list ms-3">Info.01241588@gmail</span>
              </div>
            </div>

            <div className="col-lg-3  align-items-center justify-content-center"
              data-aos="fade-left"
              data-aos-duration="2000">
              <div className="">
                <ul className="list-unstyled align-items-center justify-content-between mb-4 mb-lg-5">
                  <li className="me-3 me-lg-4">
                    <a
                      className="text-decoration-none footer-para-list "
                      href="/"
                    >
                      Company
                    </a>
                  </li>

                  <li className="me-3 me-lg-4">
                    <a
                      className="text-decoration-none footer-para-list "
                      href="/#about"
                    >
                      Investors
                    </a>
                  </li>

                  <li className="me-3 me-lg-4">
                    <a
                      className="text-decoration-none footer-para-list "
                      href="/#PRODUCTS"
                    >
                      Product
                    </a>
                  </li>

                  <li className="me-3 me-lg-4">
                    <a
                      className="text-decoration-none footer-para-list "
                      href="/#about"
                    >
                      Jopunral
                    </a>
                  </li>

                  <li className="me-3 me-lg-4">
                    <a
                      className="text-decoration-none footer-para-list "
                      href="/#PRODUCTS"
                    >
                      Reach Us
                    </a>
                  </li>

                </ul>
              </div>
            </div>


            <div className="col-lg-3  align-items-center justify-content-center"
              data-aos="fade-left"
              data-aos-duration="2000">
              <ul className="list-unstyled align-items-center justify-content-between mb-4 mb-lg-5">
                <li className="me-3 me-lg-4">
                  <a
                    className="text-decoration-none footer-para-list "
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="me-3 me-lg-4">
                  <a
                    className="text-decoration-none footer-para-list "
                    href="/#about"
                  >
                    Company
                  </a>
                </li>
                <li className="me-3 me-lg-4">
                  <a
                    className="text-decoration-none footer-para-list "
                    href="/#PRODUCTS"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="me-3 me-lg-4">
                  <a
                    className="text-decoration-none footer-para-list "
                    href="/#about"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li className="me-3 me-lg-4">
                  <a
                    className="text-decoration-none footer-para-list "
                    href="/#PRODUCTS"
                  >
                    Return & Refund
                  </a>
                </li>

              </ul>
            </div>

            <div className="col-lg-3 "
              data-aos="fade-left"
              data-aos-duration="2000">
              <div className="">

                <a
                  href="https://www.instagram.com/"
                  className="text-decoration-none footer_icon_img me-3"
                >
                  <img src={InstagramIcon} alt="" />
                </a>

                <a
                  href="https://www.facebook.com/"
                  className="text-decoration-none footer_icon_img me-3"
                >
                  <img src={FacebookIcon} alt="" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  className="text-decoration-none footer_icon_img"
                >
                  <img src={LinkedinIcon} alt="" />
                </a>
              </div>
            </div>


          </div>
        </div>

      </section>
    </>
  );
};

export default Footer;
