import React, { useContext, useState } from 'react';
import userContext from '../userContext';

const Rating = () => {
  const {selectedRating, setSelectedRating} = useContext(userContext);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="rating-container">
      <p>قيم تجربتك</p>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            onClick={() => handleRatingClick(rating)}
            className={rating <= selectedRating ? 'active' : ''}
          >
            ☆
          </span>
        ))}
      </div>
      <p id="selected-rating">التقييم المحدد: {selectedRating}</p>


    </div>
  );
};

export default Rating;
