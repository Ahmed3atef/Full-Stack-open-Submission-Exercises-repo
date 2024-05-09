const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.ex}</p>
  )

}

const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0].part} ex={props.parts[0].exercises} />
      <Part part={props.parts[1].part} ex={props.parts[1].exercises} />
      <Part part={props.parts[2].part} ex={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
  
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
      part: 'Fundamentals of React',
      exercises: 10
    }
  const part2 = {
    part: 'Using props to pass data',
    exercises: 7
  }
  const part3 = 
  {
    part: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      
      <Content parts={[part1,part2,part3] } />
      
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App