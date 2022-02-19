import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

// import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  let [people, setPeople] = useState(data)
  let [index, setIndex] = useState(0)
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person)=> {
          const {id, image, name, title, quote} = person;

          return(
          <article key={id}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon"/>
          </article>
          )

        })}
        <button className="btn">
          <FaChevronLeft/>

        </button>
      </div>
    </section>
  );
}

export default App;
