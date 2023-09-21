import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Homepage from './pages/homepage'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='flex'> 
      <Sidebar />
      <Navbar />
      <Homepage />
    </div>

   
   
    
    </>
  )
}

export default App
