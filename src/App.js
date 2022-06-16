import { useState } from 'react'




const Select = ({selected,setSelected,length}) => 
{
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min + 1;
  }
  return (
    <div>
      <button onClick={() => setSelected(randomNumber(-1,length-1))}>Random anecdote</button>
      
    </div>
  )


}



function Button(props) {
  return <button onClick={() => props.function(props.value + 1)}>
    {props.text}
  </button>
}


const Vote = ({votes,setVotes,selected}) => 
{

  function voteCurrent (votes,setVotes,selected) {
    const copy= [...votes]
    copy[selected]++
    setVotes(copy)
  }


  return (
    <div>
      <button onClick={() => voteCurrent(votes,setVotes,selected)}>Vote</button>
    </div>
  )


}

function findBiggest(votes){
  let biggest = 0
  for(let i=0;i<votes.length;i++){
    if(votes[i]>votes[biggest]){
      biggest = i
    }
  }
  return biggest
}


const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState( new Uint8Array(anecdotes.length) )

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} values</p>
      <Vote votes={votes} setVotes={setVotes} selected={selected}/>
      <Select selected={selected} setSelected={setSelected} length={anecdotes.length}/>
      <h1>Anectode with most votes</h1>
      <p>{anecdotes[findBiggest(votes)]}</p>
    </div>
  )
}

export default App