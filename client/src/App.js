import './App.css';
import { ThemeProvider } from './Components/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Components/Login';
import MainApp from './Components/MainApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <ThemeProvider>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> {/* Login page */}
            <Route path="/dashboard" element={isLoggedIn ? <MainApp setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
