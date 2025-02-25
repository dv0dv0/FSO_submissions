import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const names = [
  {
    id: 1,
    content: 'Arto Hellas'
  },
  {
    id: 2,
    content: 'Ada Lovelace'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App names={names} />
)
