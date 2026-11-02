import { useState } from "react";

const Button = (props) => {
  const increaseValue = (value, setvalue) => {
    setvalue(value + 1);
  };
  return (
    <button onClick={() => increaseValue(props.var, props.fun)}>
      {props.text}
    </button>
  );
};

const Statistics = (props) => {
  const StatisticLine = (vals) => {
    return (
      <p>
        {vals.text}: {vals.value}
      </p>
    );
  };

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
          <table>
            <tbody>
              <tr>
                <td>
                  <StatisticLine text={"Good"} value={props.good} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text={"Neutral"} value={props.neutral} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text={"Bad"} value={props.bad} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text={"All"} value={calcTotal()} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text={"Mean"} value={calcMean()} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text={"Positive"} value={calcPos()} />
                </td>
              </tr>
            </tbody>
          </table>
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
