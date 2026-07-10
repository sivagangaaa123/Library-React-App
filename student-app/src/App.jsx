import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchStudent from './components/SearchStudent'
import DeleteStudent from './components/DeleteStudent'
import ViewAllStudents from './components/ViewAllStudents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<AddStudent/>} />
      <Route path='/search' element={<SearchStudent/>} />
      <Route path='/delete' element={<DeleteStudent/>} />
      <Route path='/view' element={<ViewAllStudents/>} />

      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
