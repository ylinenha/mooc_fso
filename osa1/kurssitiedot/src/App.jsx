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
      <Content name1={part1.name} len1={part1.exercises} name2={part2.name} len2={part2.exercises} name3={part3.name} len3={part3.exercises}></Content>
      <Total a={part1.exercises} b={part2.exercises} c={part3.exercises}></Total>
    </div>
  )
}

export default App