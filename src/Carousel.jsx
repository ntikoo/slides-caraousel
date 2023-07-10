import React from "react";
import { useState } from "react";
import { longList } from "./data";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";


const Crousel = () => {
  const [data, setData] = useState(longList);
  const [index, setIndex] = useState(0);
  const handleMinus = () => {
    if (index > 0 && index < data.length) {
      setIndex(index - 1);
    }
  };
  const handlePlus = () => {
    if (index >= 0 && index < data.length - 1) {
      setIndex(index + 1);
    }
  };
  return (
    <section className="slider-container ">
      <article className="slide " key={index}>
        <img className="person-img" src={data[index].image} />
        <h5 className="name">{data[index].name}</h5>
        <p className="title">{data[index].title}</p>
        <p className="text">{data[index].quote}</p>
        <button
          type="button"
          className="prev "
          onClick={() => handleMinus(index)}
        >
          <BiSolidChevronLeft></BiSolidChevronLeft>
        </button>
        <button
          type="button"
          className="next "
          onClick={() => handlePlus(index)}
        >
          <BiSolidChevronRight></BiSolidChevronRight>
        </button>
      </article>
    </section>
  );
};

export default Crousel;
