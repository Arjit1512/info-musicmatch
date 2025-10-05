import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PP from './pages/pp.js';
import Home from './pages/home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/privacy-policy' element={<PP/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
