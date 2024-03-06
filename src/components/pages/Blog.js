import React from "react";

import "../../assets/style/common.css"
import imageBlog2 from "../../assets/image/png/Imageblog2.png"
import blogImg1 from "../../assets/image/png/Image Placeholder.png"


function Blog() {

  return (
    <section>
      <div className="container z_index_100 py-sm-5">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h2 className="heading my-sm-5 my-3">OUR  <span className="text_heading">BLOGS</span></h2>
          <p className="para">We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our team has the expertise to provide all of our investors with the education, guidance and support required to maximize profits both from a short and long-term perspective through their entire investment journey.

          </p>
        </div>
        <div className="row justify-content-center align-items-center">
          <div
            className="col-lg-6 blog_bg_image pe-0 col-sm-6 col-11 justify-content-center align-items-center text-align-center pt-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="mt-5  py-5 " style={{ width: "444px", height: "212px" }}>
              <div className="d-flex justify-content-between px-4">
                <h2 className="blog_heading">DEVELOPMENT </h2>
                <span className="blog_heading" style={{ color: " #999999" }}>11 March 2023</span>
              </div>

              <div className="px-4">
                <p className="blog-para">Best Website to research for your  next project</p>
                <p className="blog-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs </p>
                <p className="button-read">Read more</p>
              </div>

            </div>
          </div>
          <div
            className="col-lg-6 ps-0 col-sm-6 col-11 justify-content-center align-items-center cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="d-flex">
              <div className="img_box"><img src={blogImg1} /></div>
              <div className="text_box1 ">
                <div className="text_box">
                  <div className="d-flex pt-4 justify-content-between px-4">
                    <h2 className="blog_heading">DEVELOPMENT </h2>
                    <span className="blog_heading" style={{ color: " #999999" }}>11 March 2023</span>
                  </div>

                  <div className="px-4 ">
                    <p className="text_box_para">Best Website to research for your  next project</p>
                    <p className="text_box_para2">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs </p>
                    <p className="button-read">Read more</p>
                  </div></div>
              </div>
            </div>

            <div className="d-flex">
              <div className=" text_box1">
                <div className="text_box">
                  <div className="d-flex justify-content-between pt-4 px-4">
                    <h2 className="blog_heading">DEVELOPMENT </h2>
                    <span className="blog_heading" style={{ color: " #999999" }}>11 March 2023</span>
                  </div>

                  <div className="px-4">
                    <p className="text_box_para">Best Website to research for your  next project</p>
                    <p className="text_box_para2">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs </p>
                    <p className="button-read">Read more</p>
                  </div>
                </div></div>
              <div className="img_box"><img src={imageBlog2} /></div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }} className="my-5"><button className="expolre-button">Explore More</button></div>
      </div>
    </section>

  );
};

export default Blog;
