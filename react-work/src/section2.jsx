import React, { useState } from "react";

function Section2() {
  const [heading, setHeading] = useState("Welcome to my website");

  const handleClick = () => {
    setHeading("React is controlling this page!");
  };

  return (
    <div>
      <h2>Section 2: DOM Manipulation</h2>
      <h3>{heading}</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Section2;