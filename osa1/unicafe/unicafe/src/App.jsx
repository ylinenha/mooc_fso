import { useState } from "react";

const Statistics = (props) => {
  const calcTotal = () => {
    return props.good + props.neutral + props.bad;
  };
  const calcMean = () => {
    return (props.good * 1 + props.bad * -1) / calcTotal();
  };
  const calcPos = () => {
    return ((props.good * 1) / calcTotal()) * 100;
  };

  return (
    <div>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {calcTotal()}</p>
      <p>mean: {calcMean()}</p>
      <p>positive: {calcPos()} %</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseValue = (value, setvalue) => {
    console.log(value);
    setvalue(value + 1);
  };

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
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </div>
    </div>
  );
};

export default App;
