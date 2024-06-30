import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Note from './Test'


function App() {
  const [counter, setCount] = useState(0)
  let myName = "Aritra Parui"
  function Update() {
    if (counter >= -30) {
      setCount(counter - 1);

    } else {
      console.log("error!")
    }
    // console.log("hello", counter);

    return (
      <>
        <h1 className='card'>count {counter} </h1>
        <button onClick={Update}> -1 </button>

      </>
    )
  }
}

export default App
