import { useState } from 'react'

const Button = ({onHit, text}) => {
  return(
    <button onClick={onHit} > 
      {text}
    </button>
  )
}

const Statistics = (props) => {
  const good = props.in.good
  const neutral = props.in.neutral
  const bad = props.in.bad
  const sum = good + neutral + bad
  const avg = good / sum
  const percent = (good / sum) * 100
  
  if (sum === 0){
    return (
      <>
      <StatisticLine  text={"No feedback given"}/>
      </>
    )
  }
  return(
    <> 
      <StatisticTable
      names={["good", "netural", "bad", "all", "average", "positive"]}
      values={[good, neutral, bad, sum, avg, percent]}
      />
    </>
  )
}

const StatisticLine  = ({text, number, symbol}) => {
  return (
    <p>{text} {number} {symbol}</p>
  )
}

const StatisticTable = (props) => {
  return(
    <table>
      <thead>
        <tr>
          <td>{props.names[0]}</td>
          <td>{props.values[0]}</td>
        </tr>
        <tr>
          <td>{props.names[1]}</td>
          <td>{props.values[1]}</td>
        </tr>
        <tr>
          <td>{props.names[2]}</td>
          <td>{props.values[2]}</td>
        </tr>
        <tr>
          <td>{props.names[3]}</td>
          <td>{props.values[3]}</td>
        </tr>
        <tr>
          <td>{props.names[4]}</td>
          <td>{props.values[4]}</td>
        </tr>
        <tr>
          <td>{props.names[5]}</td>
          <td>{props.values[5]} %</td>
        </tr>
      </thead>
    </table>
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
      <Statistics in={{"good":good, "neutral":neutral, "bad":bad}}/>
    </div>
  )
  
}

export default App