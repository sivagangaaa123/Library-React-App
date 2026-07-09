import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBook from './components/AddBook'
import SearchBook from './components/SearchBook'
import DeleteBook from './components/DeleteBook'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewAllBooks from './components/ViewAllBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBook/>} />
      <Route path='/search' element={<SearchBook/>} />
      <Route path='/delete' element={<DeleteBook/>} />
      <Route path='/view' element={<ViewAllBooks/>} />
    </Routes>
    
    </BrowserRouter>





      </>
  )
}

export default App
