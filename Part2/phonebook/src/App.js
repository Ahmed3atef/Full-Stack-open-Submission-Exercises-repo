import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [duplicate, setDuplicate] = useState(false)
  const [searching, setSearching] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearching(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPersonOpject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setDuplicate(persons.filter((person) => person.name === newName))
    if (duplicate){      
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(newPersonOpject))
      setNewName('')
    }
  }

  const searched = searching ? persons.filter((person)=>person.name.toLowerCase().includes(searching.toLowerCase())) : persons;

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter callBacked={handleSearchChange}/>

      <h3>add a new</h3>
      <PersonForm onSubmit={addPerson} nameChange={handleNameChange} numberChange={handleNumberChange}/>

      <h2>Numbers</h2>

      <Persons persons={searched} />
    </div>
  )
}

export default App