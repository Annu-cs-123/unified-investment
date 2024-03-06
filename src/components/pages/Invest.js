import React from "react";
import "../../assets/style/common.css"

const Invest = () => {
  const Data = [
    {
      heading: "High Fixed Returns ",
      text: "Build your wealth with a personalised, diversified portfolio with expert advice. ",
    },
    {
      heading: "Outperforming Market",
      text: "Outperforming Market Earn returns that are greater than the market average with minimal risk and a broader risk profile, we've proudly been beating the market since 2016 for our clients.",
    },
    {
      heading: "Get Funded",
      text: "Operating under a model of profit sharing, we make money when our investors make money and our success depends on your success.",
    },
  ];
  return (
    <>
      <section
        className="open_overlay_sections_none position-relative"
        id="NEWS"
      >

        <div className="container z_index_100 py-sm-5">
          <div data-aos="fade-up" data-aos-duration="2000">
            <h2 className="heading  my-sm-5 my-3">INVEST IN <span className="text_heading">DUBAI</span></h2>
            <p className="para">We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our team has the expertise to provide all of our investors with the education, guidance and support required to maximize profits both from a short and long-term perspective through their entire investment journey.

            </p>
          </div>
          <div className="row justify-content-center align-items-center">
            {Data &&
              Data.map((value, index) => {
                return (
                  <div
                    className="col-lg-4  col-sm-6 col-11 justify-content-center align-items-center cursor-pointer"
                    key={index}
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <div className="invest_box mt-4 py-5 px-4   ">
                      <div className="py-2">
                        <h2 className="sub-heading">{value.heading}</h2>
                      </div>
                      <div>
                        <p className="sub-para  mt-2 mb-0">{value.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Invest;
