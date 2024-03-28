import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import List from './pages/List'
import MainLayout from './components/MainLayout'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="list" element={<List/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
