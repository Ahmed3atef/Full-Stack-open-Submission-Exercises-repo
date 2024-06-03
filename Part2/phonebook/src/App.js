import { useState } from 'react'
import Dispaly from './components/Display'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [duplicate, setDuplicate] = useState(false)

  const handNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPersonOpject = {
      name: newName
    }
    setDuplicate(persons.filter((person) => person.name === newName))
    if (duplicate){      
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(newPersonOpject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handNameChange} />          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Dispaly persons={persons}></Dispaly>
      </ul>
      <div>debug:{persons.map((person) => person.name)}</div>
    </div>
  )
}

export default App