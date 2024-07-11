import './App.css'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>			
  );
}

export default App
