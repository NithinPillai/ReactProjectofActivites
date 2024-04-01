import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MynavBar from './navbar.jsx'
import MyActivities from './Activities.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)







  return (
    <>
      <MynavBar/>
      <MyActivities />
    </>
  )
}

export default App
