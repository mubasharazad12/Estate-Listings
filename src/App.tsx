import { useState } from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Homepage from './pages/Homepage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='flex'> 
      <Sidebar />
      <main className='flex flex-col w-full'>
        <Navbar />
       <Homepage />
      </main>
    
    </div>

   
   
    
    </>
  )
}

export default App
