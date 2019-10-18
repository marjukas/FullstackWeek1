import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
    return <h2>{text}</h2>
}

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Positive = ({good, all}) => {
    return (
        <tr>
            <td>positive</td>
            <td>{(good * 100) / all} %</td>
        </tr>
    )    
}

const Statistics = ({good, neutral, bad}) => {
    const all = (good + neutral + bad)
    if (all === 0) {
        return (
            <div>
                <Header text='statistics' />
                No feedback given
            </div>
        )
    }
    else {
        return (
            <div>
                <Header text='statistics' />
                <table>
                    <tbody>
                    <Statistic text='good' value={good}/>
                    <Statistic text='neutral' value={neutral}/>
                    <Statistic text='bad' value={bad}/>
                    <Statistic text='all' value={all}/>
                    <Statistic text='average' value={(good + (-1 * bad)) / all}/>
                    <Positive good={good} all={all}/>
                    </tbody>
                </table>
                
            </div>
            )
    }
    
}



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
      setGood(good + 1)
}

const handleNeutralClick = () => {
    setNeutral(neutral + 1)
}

const handleBadClick = () => {
    setBad(bad + 1)
}

  return (
    <div>
      <Header text='give feedback' />
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')


)