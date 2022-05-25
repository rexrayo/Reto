import React from "react";
import fizzbuzz from "./Fizzbuzz";

const App = () => {
  const arrayWith100Numbers = Array.from(Array(101).keys());

  return (
    <div className="App">
      <h1>Test FIZZBUZZ</h1>
        { arrayWith100Numbers.map(
          (number) => <div style={{margin: 10}} key={number}>{fizzbuzz(number)}</div>
        ) }
    </div>
  );
}

export default App;
