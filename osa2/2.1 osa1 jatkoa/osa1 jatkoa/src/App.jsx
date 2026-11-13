const App = () => {
  const courses = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  const Course = ({ course }) => {
    console.log(course);
    console.log(course.name);
    console.log(course.exercises);
    return (
      <div>
        <p>
          {" "}
          {course.name} {course.exercises}
        </p>
      </div>
    );
  };

  return (
    <div>
      <h1>{courses.name}</h1>
      {courses.parts.map((course) => (
        <Course key={course.id} course={course} />
      ))}
      <p>
        Total of{" "}
        {courses.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
      </p>
    </div>
  );
};

export default App;

/*const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
);

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Total = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};

export default App;
*/
