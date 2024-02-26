
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import SiginUp from './component/SiginUp';
import ForgetPassword from './component/ForgetPassword';
import UpdateProfile from './component/UpdateProfile';
import Dashboard from './component/Dashboard';

function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SiginUp />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/update-profile' element={<UpdateProfile />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
