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
      <Part name={props.parts[0].name} len={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} len={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} len={props.parts[2].exercises}/>
    </div>)
}

const Total = (props) =>{
  return (<p>Number of exercises {props.a + props.b + props.c}</p>)
}

const App = () => {
const course = 'Half Stack application development'
    const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total a={parts[0].exercises} b={parts[1].exercises} c={parts[2].exercises}></Total>
    </div>
  )
}

export default App