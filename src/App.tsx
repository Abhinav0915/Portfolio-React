import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Works from './Pages/Works'
import Experience from './Pages/Experience'
import About from './Pages/About'
import Resume from './Pages/Resume'
function App() {
 
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>   
      <Route path='/works' element={<Works/>}></Route>   
      <Route path='/experience' element={<Experience/>}></Route>   
      <Route path='/about' element={<About/>}></Route>   
      <Route path='/resume' element={<Resume/>}></Route>   

    </Routes>
   </BrowserRouter>
  )
}

export default App
