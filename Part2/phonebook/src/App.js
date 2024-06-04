import { useState , useEffect} from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [duplicate, setDuplicate] = useState(false)
  const [searching, setSearching] = useState('')

  useEffect(()=>{
      axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  },[])

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