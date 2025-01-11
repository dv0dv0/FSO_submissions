import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = (props) => {
    const total = props.good + props.neutral + props.bad
    const sum = props.good + (props.bad * -1)
    const average = sum / total
    const positive = props.good / total * 100
    return (
      <div>
        <h1>statistics</h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {total}</p>
        <p>sum {sum}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    )
  }

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
      
    </div>
  )
}

export default App