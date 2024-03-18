import { useState, useContext } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Travel  from './pages/Travel'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import DisruptionMessage from './pages/DisruptionMessage'

function App() {

  return (
    <>
    <div className='menu'>
      <h1>Travel Widget</h1>
    </div>
      <div className='main-content'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/travel' element={<Travel/>} />
        <Route exact path='/travel/:line' element={<DisruptionMessage/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
    </>
  )
}

export default App
