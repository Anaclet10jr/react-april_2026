import React, { useState } from "react";

function Section3() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div>
      <h2>section 3: Event Handling</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  );
}

export default Section3;