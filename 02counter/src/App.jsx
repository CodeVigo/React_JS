import { useState } from 'react'    //hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0)


  const addValue = () =>{
    console.log("Value",counter)
    setCounter(counter+1)
  }

  const removeValue = () =>{
    console.log("Value removed",counter)
    if(counter>0)
    setCounter(counter-1)

    //setCounter: This is a function that you can use to update the state. When you call setCounter(newValue), it not only updates the state to the new value but also triggers a re-render of the component.



  }
  return (
    <>
      
      <h1>County</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>

        <br />
        <br />

      <button
        onClick={removeValue}
        >Remove Value</button>

    </>
  )
}

export default App
