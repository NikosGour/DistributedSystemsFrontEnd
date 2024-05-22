import './css/App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CarTransferPage from './pages/CarTransferPage';
import IncomingTransfersPage from './pages/IncomingTransfersPage';
import LoginPage from './pages/LoginPage';
// import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import { BASE_URL } from './assets'

function App() {
  console.log(BASE_URL)
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:license_plate" element={<CarTransferPage />} />
        <Route path="/incoming/" element={<IncomingTransfersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/nav" element={<NavBar />} /> */}
      </Routes >
    </div>

  );
}

export default App;
