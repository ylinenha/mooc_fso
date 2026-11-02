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
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const getRandomAnecdote = () => setSelected(getRandomInt(anecdotes.length));

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const addVote = () => {
    console.log(votes);
    const copy_votes = [...votes];
    copy_votes[selected] += 1;
    setVotes(copy_votes);
  };

  const returnMostVoted = () => {
    return votes.indexOf(Math.max(...votes));
  };

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
      <div>
        {" "}
        <h2>Anecdote of the day:</h2>
        <p>{anecdotes[selected]}</p>
        <div>
          <button onClick={() => addVote(selected)}>Vote</button>
          <button onClick={() => getRandomAnecdote()}>Next anecdote</button>
        </div>
        <h2>Most voted anectode:</h2>
        <p>{anecdotes[returnMostVoted()]}</p>
      </div>
    </div>
  );
};

export default App;
