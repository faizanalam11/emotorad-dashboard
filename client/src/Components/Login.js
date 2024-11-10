import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Trigger Google login logic
    // On success, set isLoggedIn to true and navigate to the dashboard
    // Simulating successful login for now
    setIsLoggedIn(true);
    navigate('/dashboard'); // Navigate to the dashboard after login
  };

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
