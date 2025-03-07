import { useState } from 'react'

import './App.css'
import Quiz from './components/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz/>

    </>
  )
}

export default App
