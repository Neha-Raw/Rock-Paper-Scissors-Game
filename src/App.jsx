import { useCallback, useState } from 'react'
import ShowResult from './ShowResult'
import './App.css'

function App() {
  const [show, setShow] = useState("")
  const [computerShow, setComputerShow] = useState("")
  const [result, setResult] = useState("hiddenResult")
  const valueArr = ["rock", "paper", "scissors"]
  // const [lock, setLock] = useState(false)

  let computerchoice = valueArr[Math.floor(Math.random() * valueArr.length)];
  const handleClick = (value) => {

    setShow(value)
    setComputerShow(computerchoice)
    setResult("result")
    // valueArr[0]
  }
  const handleButtonClick = () => {
    window.location.reload()
  }
  return (
    <div>
      <h1 className='heading'>Rock : Paper : Scissors</h1>
      {valueArr.map((value, index) => {
        return <button className='btn' key={index} onClick={() => handleClick(value)}>{value}</button>
      })}
      <div className='join'>
        <div>
          <h1>Player</h1>
          <div className='show'>{show}</div>
        </div>
        <div>
          <h1>Computer</h1>
          <div className='computer-choice'>{computerShow} </div>
        </div>

      </div>
      <div className='results-div'>
        <ShowResult userChoice={show} computerchoice={computerShow} result={result} />
      </div>
      <button onClick={handleButtonClick}>Play Again</button>
    </div>
  )
}

export default App
