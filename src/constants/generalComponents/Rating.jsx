import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 fill-current ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 1.928l2.387 6.159H19.57l-4.766 3.678 1.787 6.199L10 15.876l-6.59 4.086 1.787-6.199L.43 8.087H6.57L9.957 1.928z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
