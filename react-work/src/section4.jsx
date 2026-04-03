import React, { useState } from "react";

function Section4() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [results, setResults] = useState({});

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setResults({
        addition: n1 + n2,
        subtraction: n1 - n2,
        multiplication: n1 * n2,
        division: n2 !== 0 ? n1 / n2 : "Cannot divide by zero",
      });
    }
  };

  return (
    <div>
      <h2>Section 4: Simple Calculator</h2>
      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      <div>
        {results.addition !== undefined && (
          <ul>
            <li>Addition = {results.addition}</li>
            <li>Subtraction = {results.subtraction}</li>
            <li>Multiplication = {results.multiplication}</li>
            <li>Division = {results.division}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Section4;