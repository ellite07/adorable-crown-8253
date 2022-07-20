import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Customers from "./pages/Customers"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Customers/>
    </div>
  )
}

export default App
