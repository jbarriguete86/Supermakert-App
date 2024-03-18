import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import List from './pages/List'
import MainLayout from './components/MainLayout'
import { getItems} from "./configuration/configuration"

function App() {
  const [items, setItems] = React.useState(null)


  React.useEffect(()=>{
    async function loadItems(){
      const data = await getItems()
      setItems(data)
    }
    loadItems()
  },[])


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="list" element={<List items={items}/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
