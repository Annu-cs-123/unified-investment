import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Star from "../../assets/image/svg/Star.svg";
import QuotesImage from "../../assets/image/svg/quotes.svg";
import JhonImage from "../../assets/image/png/jhonHImage.png";
import DenialImage from "../../assets/image/png/jhonImage.png";
import VerticalLine from "../../assets/image/png/Line 2.png";



function Testimonials() {
  const testimonials = [
    {
      image: DenialImage,
      quotes: QuotesImage,
      star: Star,
      line: VerticalLine,
      text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
      author: "Danial H",
      designation: "CEO GetNextDesign"
    },
    {
      image: JhonImage,
      quotes: QuotesImage,
      star: Star,
      line: VerticalLine,
      text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
      author: "Jane H",
      designation: "Design"
    },
  ];


  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false, // Disable arrows

  };


  return (
    <div className="container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="testimonial d-flex py-5 ">
              <div className='px-3'>
                <img src={testimonial.image} />
              </div>

              <div>
                <img src={testimonial.quotes} />
                <span className='d-flex py-3'>
                  <img src={testimonial.star} />
                  <img src={testimonial.star} />
                  <img src={testimonial.star} />
                  <img src={testimonial.star} />
                  <img src={testimonial.star} />
                </span>

                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author testimonial-text mb-0 pt-3">{testimonial.author}</p>
                <p className='testimonial-design'>{testimonial.designation}</p>
              </div>
              <div className='px-3'>
                <img src={testimonial.line} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
