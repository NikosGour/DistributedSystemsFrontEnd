import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

import HomePage from './HomePage';
import CarTransfer from './CarTransfer';
import NavBar from './NavBar';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<CarTransfer />} />
        <Route path="/nav" element={<NavBar />} />
      </Routes >
    </div>

  );
}

export default App;
