import React from "react";
import { useMediaQuery } from "react-responsive";

import logo from "../../assets/image/png/Unified Investment logo.png"

const Header = () => {

  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };

  return (
    <>
      <div className="navbar-wrapper w-100 z_index_100 py-4">
        <Desktop>

          <div className="container z_index_100 d-flex justify-content-between align-items-center">
            <div className="nav-logo   cursor-pointer d-flex justify-content-center">
              <img
                className="cursor-pointer"
                src={logo}
                alt="logo"
              />
            </div>

            <div className="nav-list-items d-flex justify-content-end">
              <ul className="list-unstyled d-flex align-items-center m-0">
                <li className="me-4" style={{ color: "white" }} >
                  <a className="text-decoration-none sub-para hover-text " role="button" >HOME</a>
                </li>
                <li className="me-4" style={{ color: "white" }}>
                  <a
                    className="text-decoration-none sub-para white hover-text "
                    role="button"
                  >
                    COMPANY
                  </a>
                </li>
                <li className="me-4 nav-item dropdown" style={{ color: "white" }}>
                  <a
                    className="text-decoration-none sub-para  hover-text nav-link dropdown-toggle "
                    role="button" data-bs-toggle="dropdown"
                  >
                    INVESTORS
                  </a>

                </li>
                <li className="me-4 nav-item dropdown" style={{ color: "white" }}>
                  <a
                    className="text-decoration-none sub-para hover-text nav-link dropdown-toggle  "
                    role="button"
                  >
                    PRODUCTS
                  </a>
                </li>
                <li className="me-4 " style={{ color: "white" }}>
                  <a
                    className="text-decoration-none sub-para hover-text "
                    role="button"
                  >
                    JOURNAL
                  </a>
                </li>
                <li className="me-4" style={{ color: "white" }}>
                  <a
                    className="text-decoration-none sub-para hover-text "
                    role="button"
                  >
                    REACH US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Desktop>
        <BeforeDesktop>
          <div className="px-3 d-flex justify-content-between align-items-center">
            <div className="nav-logo">
              <img src={logo} alt="logo" />
            </div>


            <div
              id="nav-icon1"
              className={`hamburger-menu`}
              onClick={() => handldeOverlayActive()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`navbar-overlay`}>
            <ul className="h-100 list-unstyled d-flex flex-column align-items-center justify-content-center m-0">
              <li className="py-4" onClick={() => handldeOverlayActive()}>
                <a className="text-decoration-none sub-para white" href="/">
                  HOME
                </a>
              </li>
              <li className="py-4" onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none sub-para white"
                  href="/#about"
                >
                  ABOUT
                </a>
              </li>
              <li className="py-4" onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none sub-para white"
                  href="/#PRODUCTS"
                >
                  PRODUCTS
                </a>
              </li>
              <li className="py-4" onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none sub-para white"
                  href="/#NEWS"
                >
                  NEWS
                </a>
              </li>
              <li className="py-4" onClick={() => handldeOverlayActive()}>
                <a
                  className="text-decoration-none sub-para white"
                  href="/#CONTACT"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </BeforeDesktop>
      </div>

    </>
  );
};

export default Header;
