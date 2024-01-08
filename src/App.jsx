import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import './CSS/App.css'
import './CSS/addPage.css'
import './CSS/cards.css'
import './CSS/main.css'
import './CSS/loader.css'

import Form from './modules/Form'
import Home from './modules/Home'

function App() {
  const [active, setActive] = useState("Home")

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form' element={<Form setActive={setActive}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
