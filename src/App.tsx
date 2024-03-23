import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Pages/Homepage'
import Works from './components/Pages/Works'
import Experience from './components/Pages/Experience'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
function App() {
 
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>   
      <Route path='/works' element={<Works/>}></Route>   
      <Route path='/experience' element={<Experience/>}></Route>   
      <Route path='/about' element={<About/>}></Route>   
      <Route path='/contact' element={<Contact/>}></Route>   

    </Routes>
   </BrowserRouter>
  )
}

export default App
