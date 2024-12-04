import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Random } from './components/Random'
import { Tags } from './components/Tags'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
         <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold'>Random GIFs</h1>
         <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
          <Random />
          <Tags />
         </div>
      </div>

    </>
  )
}

export default App
