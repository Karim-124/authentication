
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import SiginUp from './component/SiginUp';

function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SiginUp />} />
      </Routes>
    </>
  )
}

export default App
