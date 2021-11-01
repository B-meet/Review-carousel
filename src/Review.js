import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, about } = people[index];

  const decrement = () => {
    index === 0 ? setIndex(3) : setIndex(index - 1);
  };

  const increment = () => {
    index === 3 ? setIndex(0) : setIndex(index + 1);
  };

  const any = () => {
    setIndex(Math.floor(Math.random() * 4));
  };

  return (
    <article key={id} className='card'>
      <FaQuoteRight />
      <img className='image' src={image} alt={name} />
      <section className='info'>
        <h4 className='name'>{name}</h4>
        <h5 className='title'>{job}</h5>
        <p className='about'>{about}</p>
        <FaChevronLeft onClick={() => decrement()} />
        <FaChevronRight onClick={() => increment()} />
        <button className='btn' onClick={() => any()}>
          surprise me
        </button>
      </section>
    </article>
  );
};

export default Review;
