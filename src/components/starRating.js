import { useState } from "react";

function Star({
  handleTempRating,
  index,
  filled,
  onRate,
  color = "#fcc419",
  size = "20px",
}) {
  let starStyle = {
    width: size + "px",
    height: size + "px",
    fill: color,
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={() => handleTempRating(index + 1)}
      onMouseLeave={() => handleTempRating(0)}
    >
      {filled ? (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"></path>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
        </svg>
      )}
    </span>
  );
}

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 20,
  rating = 0,
  setRating = () => {},
}) {
  const [tempRating, setTempRating] = useState(0);

  return (
    <div className="star flex items-center">
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          handleTempRating={(i) => setTempRating(i)}
          index={index}
          onRate={() => setRating(index + 1)}
          filled={tempRating ? tempRating >= index + 1 : rating >= index + 1}
          color={color}
          size={size}
        />
      ))}
      <p className="ml-2" style={{ fontSize: `${size / 1.5}px` }}>
        {tempRating || rating || ""}
      </p>
    </div>
  );
}
