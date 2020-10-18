import React from "react";
import "./style.css";

const element = <h1>Hello, world!</h1>;

function Uha() {
  return (
    <ul>
      <li>
        Hej hej
      </li>
    </ul>
  );
}

export default function App() {
  return (    
    <div>
    {element}
    <Uha />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

