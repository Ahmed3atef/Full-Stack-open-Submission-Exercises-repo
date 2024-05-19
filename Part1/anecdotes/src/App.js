import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const VoteAdd = (props) => {
  const vCopy = [...props.votes]
  vCopy[props.selected] += 1
  return vCopy
}

const MaxVote = (props) => {
  const vCopy = [...props.votes]

  const result = vCopy.reduce(
    (accumulator, initValue) => Math.max(accumulator, initValue),
    vCopy[0]
  )
  return result
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
  const voteStar = MaxVote({votes})

  function Randomizing(){
    const max = anecdotes.length 
    let newSelected
    while (true){
      newSelected = Math.round(Math.random() * max)
      if (newSelected !== selected) return newSelected
    }
  }
  console.log(votes)
  console.log(votes[voteStar])
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <Button onClick={() => setVotes(VoteAdd({votes, selected}))} text="Vote" />
      <Button onClick={() => setSelected(Randomizing())} text="next anecdote"/>

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[votes.indexOf(voteStar)]}</div>
      <div>has {voteStar} votes</div>
      
    </div>

  )
}

export default App

// 1.12*: anecdotes step 1 (Done)
// 1.13*: anecdotes step 2 (Done)
// 1.14*: anecdotes step 3 (Done)