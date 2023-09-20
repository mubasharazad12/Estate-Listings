import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Sidebar />
    
    </>
  )
}

export default App
