import { useState } from "react";

const Button = (props) => {
  const increaseValue = (value, setvalue) => {
    console.log(value);
    setvalue(value + 1);
  };
  return (
    <button onClick={() => increaseValue(props.var, props.fun)}>
      {props.text}
    </button>
  );
};

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
      {(props.good != 0) | (props.neutral != 0) | (props.bad != 0) ? (
        <div>
          <p>Good: {props.good}</p>
          <p>Neutral: {props.neutral}</p>
          <p>Bad: {props.bad}</p>
          <p>All: {calcTotal()}</p>
          <p>Mean: {calcMean()}</p>
          <p>Positive: {calcPos()} %</p>
        </div>
      ) : (
        "No feedback given."
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button var={good} fun={setGood} text={"good"}></Button>
        <Button var={neutral} fun={setNeutral} text={"neutral"}></Button>
        <Button var={bad} fun={setBad} text={"bad"}></Button>
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </div>
    </div>
  );
};

export default App;
