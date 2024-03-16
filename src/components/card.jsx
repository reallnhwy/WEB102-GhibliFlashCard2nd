import React, { useState } from "react";

const Card = (props) => {

  const handleClick = () => {
    props.setIsFlipped(!props.isFlipped); // Toggle the flipped state
  };

  return (
    <div className={`Card ${props.isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="front">
        <p>{props.question}</p>
      </div>
      <div className="back">
        <p>{props.answer}</p>
      </div>
    </div>
  );
};

export default Card