import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage and redirect if logged in
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  }, [setIsLoggedIn, navigate]);

  const handleGoogleLogin = () => {
    // Trigger Google login logic
    // On success, set isLoggedIn to true and navigate to the dashboard
    // Simulating successful login for now
    window.location.href = 'http://localhost:5000/auth/google?redirect_uri=http://localhost:3000/dashboard';
    localStorage.setItem('jwt', 'your-login-token');
    setIsLoggedIn(true);
  };

  // After login, check if there's an access token and fetch user details
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');  // Assuming token is passed in URL after Google OAuth

    if (token) {
      localStorage.setItem('jwt', token);
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  }, [setIsLoggedIn, navigate]);

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='w-full h-full sm:h-5/6 sm:w-4/6 sm:rounded-xl z-50 text-white bg-slate-800 flex flex-col justify-center items-center m-auto gap-2'>
        <h1 className='text-3xl font-bold font-mono'>Login to Board.</h1>
        <span className='text-xs'>login with you google account</span>
        <button onClick={handleGoogleLogin} className='p-2 rounded-3xl flex items-center justify-center gap-1 border'><FcGoogle/> Signin with Google</button>
      </div>
    </div>
  );
};

export default Login;
