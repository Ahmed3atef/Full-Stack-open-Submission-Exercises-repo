import { useState } from 'react'

const Button = ({onHit, text}) => {
  return(
    <button onClick={onHit} > 
      {text}
    </button>
  )
}

const Statistics = (props) => {
  const sum = props.in.good + props.in.neutral + props.in.bad
  const avg = props.in.good / sum
  const percent = (props.in.good / sum) * 100
  
  return(
    <>
      <Display text={"all"} number={sum}/>
      <Display text={"average"} number={avg}/>
      <Display text={"positive"} number={percent} symbol={"%"}/>
    </>
  )
}

const Display = ({text, number, symbol}) =>{
  return (
    <p>
      {text} {number} {symbol}
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onHit={() => setGood(good + 1)} text={"Good"}/>
      <Button onHit={() => setNeutral(neutral + 1)} text={"Neutral"}/>
      <Button onHit={() => setBad(bad + 1)} text={"Bad"}/>
      <h1>statistics</h1>
      <Display text={"good"} number={good}/>
      <Display text={"neutral"} number={neutral}/>
      <Display text={"bad"} number={bad}/>
      <Statistics in={{"good":good, "neutral":neutral, "bad":bad}}/>
    </div>
  )
  
}

export default App