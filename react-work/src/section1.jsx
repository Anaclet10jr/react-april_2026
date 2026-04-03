import React from "react";

function Section1() {
  const studentName = "Alice";
  const courseName = "Frontend Development";
  const year = 2026;

  console.log(`Welcome ${studentName} to the ${courseName} course.`);

  return (
    <div>
      <h2>Part 1: JavaScript Basics</h2>
      <p>Welcome {studentName} to the {courseName} course ({year})</p>
    </div>
  );
}

export default Section1;