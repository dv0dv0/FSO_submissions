import { useState } from 'react'
import Name from './components/Name'

const App = (props) => {
  const [persons, setPersons] = useState(props.names) 
  const [newName, setNewName] = useState('')

  const dupeCheck = (name) => {
    return persons.some(person => person.content === name);
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

    if (event.target.value && dupeCheck(event.target.value)) {
      window.alert(`${event.target.value} already exists in the phonebook!`);
    }
  }


  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const nameObject = {
      content: newName,
      id: String(persons.length + 1)
    }
    dupeCheck(newName)
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(name =>
          <Name key={name.id} name={name} />
        )}
      </ul>
    </div>
  )
}

export default App