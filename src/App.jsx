

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login'
import Register from './Components/Register'
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';

function App() {
 

  return (
   

    <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </Router>
  );
}




export default App
