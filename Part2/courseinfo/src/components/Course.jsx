const Course = ({ course }) => {
    return (
      <div>
        <CourseHeader name={course.name} />
        <Content parts={course.parts} />
        <TotalCount parts={course.parts} />
      </div>
    )
  }
  
  const CourseHeader = ({ name }) => {
    return <h2>{name}</h2>
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <div>
        {part.name} {part.exercises}
      </div>
    )
  }
  
  const TotalCount = ({ parts }) => {
    const justExercises = parts.map(part => part.exercises)
    const totalExercises = justExercises.reduce((sum, current) => sum + current, 0)
    return (
      <div>
        <strong>total of {totalExercises} exercises</strong>
      </div>
    )
  }
  

  export default Course