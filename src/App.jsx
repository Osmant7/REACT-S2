import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Rectangle from './pages/Rectangle'
import Navbar from './components/Navbar'
import ArrayState from './pages/ArrayState'
import Form from './pages/Form'
import FormExercice from './pages/FormExercice'
import FormExercice2 from './pages/FormExercice2'
import LifeCycle from './pages/LifeCycle'
import DevineLeNombre from './pages/DevineLeNombre'
import Users from './pages/Users'
import ShareState from './pages/ShareState'
import TempConverter from './pages/TempConverter'
import Memory from './pages/Memory'
import Caroussel from './pages/Caroussel'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rectangle />} />
          <Route path="/ArrayState" element ={<ArrayState />} />
          <Route path="/Form" element ={<Form />} />
          <Route path="/FormExercice" element ={<FormExercice />} />
          <Route path="/FormExercice2" element ={<FormExercice2 />} />
          <Route path="/LifeCycle" element ={<LifeCycle />} />
          <Route path="/DevineLeNombre" element ={<DevineLeNombre />} />
          <Route path="/Users" element ={<Users />} />
          <Route path="/ShareState" element ={<ShareState />} />
          <Route path="/TempConverter" element ={<TempConverter />} />
          <Route path="/Memory" element ={<Memory />} />
          <Route path="/Caroussel" element ={<Caroussel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
