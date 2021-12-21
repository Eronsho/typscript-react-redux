import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";
export const StarRating: React.FC = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              size={24}
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};
