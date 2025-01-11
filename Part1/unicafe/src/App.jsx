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

const StatisticsLine = ({ text, value }) => {
  if (text == "positive"){
    return (
      <div>
        {text} {value} %
      </div>
    )
  }
  return (
    <div>
      {text} {value}
    </div>
  )
}

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

    if (total === 0) {
      return (
        <div>
          <h1>statistics</h1>
          No feedback given
        </div>
      )
    }

    return (
      <div>
        <h1>statistics</h1>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={total} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive} />
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