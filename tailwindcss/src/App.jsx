import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <h1 className='text-3xl bg-green-500 rounded-'>vite and tailwind</h1>
     <Card  username='product photo'/>
     <Card  />
    </div>
  )
}

export default App
