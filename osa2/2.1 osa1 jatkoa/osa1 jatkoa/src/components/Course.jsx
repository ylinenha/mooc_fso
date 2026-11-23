const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  console.log("inside", course);
  console.log(course.name);
  const parts = course.parts;
  console.log(parts);
  return (
    <div>
      <h1>{course.name}</h1>
      {parts.map(
        (part) => (
          console.log(part),
          console.log(part.id),
          console.log(part.name),
          console.log(part.exercises),
          (<Part key={part.id} part={part} />)
        ),
      )}
      <p>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} </p>
    </div>
  );
};

export default Course;
