import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
      <header className='px-10 pt-10'>
        <h1 className='text-[4rem] leading-[4rem] lg:w-[60%] w-full text-white  '>A turn-key approach to continous user discovery</h1>
        <p className='text-[#e0e0e0] mt-8'>You've got a lot to take on, so we take user research your plate</p>
        <p className='pt-8 text-white text-[2rem] font-[700]'>How we work</p>
      </header>
    </div>
  )
}

export default App
