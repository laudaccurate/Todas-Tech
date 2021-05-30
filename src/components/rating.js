import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const totalrating = [];

  for(let i = 0; i < 5; i++) {
    if(i < rating) {
      totalrating.push(
        <li className="star" key={i}>
          <FaStar/>
        </li>
      );
    } else {
     totalrating.push(
        <li className="star-o" key={i}>
          <FaStar/>
        </li>
      );
    }
  }
  return (
    <div className="rating">
      <ul>{totalrating}</ul>
    </div>
  );
};

export default Rating;
