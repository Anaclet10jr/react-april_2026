// src/App.jsx
import React from "react";
import './App.css'
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Interactive Web Pages with React</h1>
      <Section1 />
      <hr />
      <Section2 />
      <hr />
      <Section3 />
      <hr />
      <Section4 />
      <hr />
      <Section5 />
    </div>
  );
}

export default App;