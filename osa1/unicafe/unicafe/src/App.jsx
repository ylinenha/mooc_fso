import { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseValue = (value, setvalue) => {
    console.log(value);
    setvalue(value + 1);
  };

  const increasegood = () => setGood(good + 1);
  const increaseneutral = () => setNeutral(neutral + 1);
  const increasebad = () => setBad(bad + 1);

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => increaseValue(good, setGood)}>good</button>
        <button onClick={() => increaseValue(neutral, setNeutral)}>
          neutral
        </button>
        <button onClick={() => increaseValue(bad, setBad)}>bad</button>
      </div>
      <div>
        <h1>Statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  );
};

export default App;
