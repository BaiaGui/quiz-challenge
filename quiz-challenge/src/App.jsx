
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { QuestionContainer } from './components/QuestionContainer'
import { Card } from './components/card'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

function App() {

  const [revealedState, setRevealedState]=useState(false);

  function handleClick(){
    setRevealedState(true);
  }

  return (
    <div className='bg-grey-5 w-screen h-screen flex justify-center items-center text-grey-1'>
    <div className='bg-grey-6 px-36 py-16 rounded-md'>
    <div className=''>
      <Header/>
      <QuestionContainer>
        <Card value={true} revealed={revealedState} answer="1+1 é 2" imgLabel={reactLogo} handleClick={handleClick}/>
        <Card value={false} revealed={revealedState} answer="1+1 é 11" imgLabel={reactLogo} handleClick={handleClick}/>
        <Card value={false} revealed={revealedState} answer="1+1 é 3" imgLabel={reactLogo} handleClick={handleClick}/>
      </QuestionContainer>
      <Footer active={revealedState}/>
    </div>
      
    </div>
    </div>
  )
}

export default App
