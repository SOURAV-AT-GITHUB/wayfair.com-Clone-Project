import React from 'react';
import { Box } from '@chakra-ui/react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const starPath = "M12 .587l3.668 7.425 8.208 1.193-5.94 5.56L19.67 24 12 20.896 4.33 24l1.734-9.235-5.94-5.56 8.208-1.193z";

  return (
    <Box display="flex">
      {Array.from({ length: 5 }, (_, index) => {
        let fill = "white"; // Default to empty star
        if (index < fullStars) {
          fill = "black"; // Full star
        } else if (hasHalfStar && index === fullStars) {
          fill = "white"; // Empty star color for the part that is not filled
        }

        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 ml-1" // Margin for gaps between stars
          >
            <path
              d={starPath}
              fill={fill}
              style={index < fullStars ? { filter: 'url(#blur)' } : {}}
            />
            <path
              d={starPath}
              stroke="black"
              strokeWidth="2" // Increased stroke width
              fill="none"
            />
            {hasHalfStar && index === fullStars && (
              <path
                d="M12 0.587l3.668 7.425 8.208 1.193-5.94 5.56L19.67 24 12 20.896 4.33 24l1.734-9.235-5.94-5.56 8.208-1.193z"
                fill="black"
                clipPath="inset(0 50% 0 0)" // Only fill the left half of the star
              />
            )}
          </svg>
        );
      })}
      {/* Define filter for rounded corners */}
      {/* <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>
      </defs> */}
    </Box>
  );
};

export default StarRating;
