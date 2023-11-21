import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Count'
import Team from './Team'
import Users from '../Users'
import Friends from '../Friends'



function App() {

  function handleClick() {
    alert('Button clicked');
  }

  const handleClick2 = () => {
    alert('Button 2 clicked');
  }

  const addToFive = (a) => {
    alert(5 + a);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      
      <Users></Users>

      <Team></Team>

      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      {/* Event handling from inside the html tag */}
      <button onClick={() => { alert('third clicked') }}>Thrid</button>
      {/* vejailla */}
      <button onClick={() => addToFive(2)}>Fourth</button>
    </>
  )
}

export default App
