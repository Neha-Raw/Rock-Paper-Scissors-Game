import { useState } from 'react'
import ShowResult from './ShowResult'
import './App.css'



function App() {
  const [show, setShow] = useState("")
  const [computerShow, setComputerShow] = useState("")
  const [result,setResult]=useState("hiddenResult")
  const valueArr = ["rock", "paper", "scissors"]

  let computerchoice = valueArr[Math.floor(Math.random() * valueArr.length)];
  const handleClick = (value) => {
    setShow(value)
    setComputerShow(computerchoice)
    setResult("result")
  }

  return (
    <div>
      {valueArr.map((value, index) => {
        return <button className='btn' key={index} onClick={() => handleClick(value)}>{value}</button>
      })}
      <h1>Player</h1>
      <div className='show'>{show}</div>
      <h1>Computer</h1>
      <div className='computer-choice'>{computerShow} </div>
      <ShowResult userChoice={show} computerchoice={computerShow} result={result}/>
    </div>
  )
}

export default App
