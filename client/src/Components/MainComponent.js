import React from 'react'
import Navbar from './Navbar';
import { useTheme } from './ThemeContext'
import Dashboard from './Dashboard';

const MainComponent = () => {
  const { theme } = useTheme();
  return (
    <div className='col-span-11 lg:col-span-10 p-2'>
        <div className={`h-full p-2 rounded-md ${theme === 'light' ? 'bg-[#CBDCEB]' : 'bg-[#222831]'}`}>
            <Navbar/>
            <Dashboard/>
        </div>
    </div>
  )
}

export default MainComponent;