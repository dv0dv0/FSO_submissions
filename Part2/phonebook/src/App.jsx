import { useState, useRef } from 'react'
import Name from './components/Name'

const App = (props) => {
  const [persons, setPersons] = useState(props.names) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const nameInputRef = useRef(null) // create a ref for the name input - used for resetting cursor to name


  const dupeCheck = (name) => {
    return persons.some(person => person.name === name);
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

    if (event.target.value && dupeCheck(event.target.value)) {
      window.alert(`${event.target.value} already exists in the phonebook!`);
    }
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)

  }

  const addEntry = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const entryObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }
    setPersons(persons.concat(entryObject))
    setNewName('')
    setNewNumber('')

    nameInputRef.current.focus() //setting focus back to name field
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            ref={nameInputRef} // attaching ref to name field for cursor return
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h2>Names</h2>
      <ul>
        {persons.map(person =>
          <Name key={person.id} name={person.name} number={person.number}/>
        )}
      </ul>
    </div>
  )
}

export default App