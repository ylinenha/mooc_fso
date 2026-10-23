const Header = (props) =>{
  return (<h1>{props.course}</h1>)
}

const Part = (props) =>{
  return (<p>
      {props.name} {props.len}
    </p>)
}

const Content = (props) =>{
  console.log(props)
  return (<div>
      <Part name={props.name1} len={props.len1}/>
      <Part name={props.name2} len={props.len2}/>
      <Part name={props.name3} len={props.len3}/>
    </div>)
}

const Total = (props) =>{
  return (<p>Number of exercises {props.a + props.b + props.c}</p>)
}

const App = () => {
const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course}></Header>
      <Content name1={part1} len1={exercises1} name2={part2} len2={exercises2} name3={part3} len3={exercises3}></Content>
      <Total a={exercises1} b={exercises2} c={exercises3}></Total>
    </div>
  )
}

export default App