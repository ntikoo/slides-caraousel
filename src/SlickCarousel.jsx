import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <section className="slide-container slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id} className="slick-slide">
              <img src={image} alt={name} className="person-img img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <button className="slick-next">
                <FaQuoteRight className="icon" />
              </button>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
