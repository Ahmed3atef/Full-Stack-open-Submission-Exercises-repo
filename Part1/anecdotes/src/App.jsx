import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const voteAdd = (props) => {
  const vCopy = [...props.votes]
  vCopy[props.selected] += 1
  return vCopy
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

  function Ranomizing(){
    const max = anecdotes.length 
    let newSelected = Math.round(Math.random(selected / max) * 10)
    if (newSelected >= max){
      newSelected = max - 1
    }
    return newSelected
  }
  
  return (
    <div>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <Button onClick={() => setVotes(voteAdd({votes, selected}))} text="Vote" />
      <Button onClick={() => setSelected(Ranomizing())} text="next anecdote"/>
    </div>
  )
}

export default App

// 1.12*: anecdotes step 1 (Done)
// 1.13*: anecdotes step 2 (Done)