import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const names = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '294-599-1818'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '200-494-9911'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App names={names} />
)
