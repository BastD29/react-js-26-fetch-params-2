import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import CreatureDetails from './components/CreatureDetails'
import Creatures from './components/Creatures'
import Home from './components/Home'
import Nav from './components/Nav'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/creatures' element={<Creatures />} />
        <Route path='/creature/:id' element={<CreatureDetails />} />
      </Routes>
    </>
  )
}
