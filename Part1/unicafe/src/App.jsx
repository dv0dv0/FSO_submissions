import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <>
        <td>{text}</td>
        <td>{value} %</td>
      </>
    )
  }
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
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
        <table>
          <tbody>
            <tr><StatisticsLine text="good" value={props.good} /></tr>
            <tr><StatisticsLine text="neutral" value={props.neutral} /></tr>
            <tr><StatisticsLine text="bad" value={props.bad} /></tr>
            <tr><StatisticsLine text="all" value={total} /></tr>
            <tr><StatisticsLine text="average" value={average} /></tr>
            <tr><StatisticsLine text="positive" value={positive} /></tr>
          </tbody>
        </table>
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