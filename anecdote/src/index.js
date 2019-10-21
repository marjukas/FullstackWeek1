import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Header = ({text}) => (
  <h2>{text}</h2>
)

const App = (props) => {
  const [selected, setSelected] = useState(5)
  
  const length = props.anecdotes.length

  const [voted, setVoted] = useState(new Array(length).fill(0))

  function getMax (array) {
    const maxVotes = Math.max.apply(null, array)
    console.log(Math.max.apply(null, array))
    return maxVotes
  }

  const Max = getMax(voted)

  function isMax (number) {
    return number >= Max
  }

  //teha nii, et 
  function getRandomInt (number) {
      return Math.floor(Math.random() * Math.floor(number) )
  }


  const handleNextClick = () => {
    console.log('enne' + selected)    
    setSelected(getRandomInt(length))
    console.log('parast' + selected)
  }

  const handleVoteClick = () => {
    console.log("selected " + selected)
    const copyVotes = [...voted]
    copyVotes[selected] += 1
    setVoted(copyVotes)
    console.log("voted " + voted)
    console.log("copyVotes " + copyVotes)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <div>
        {props.anecdotes[selected]}
        <p>has {voted[selected]} votes</p>
      </div>
      <Button text="vote" onClick={handleVoteClick}/> 
      <Button text="next anecdote" onClick={handleNextClick}/>
      <Header text="Anecdote with most votes" />
      <div>
        {props.anecdotes[voted.findIndex(isMax)]}
        <p>has {voted[voted.findIndex(isMax)]} votes</p>
      </div>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)