import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'
import { useTheme } from './ThemeContext'

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div className={`w-full rounded-md sm:p-2 justify-center sm:justify-between flex flex-col sm:flex-row items-center shadow-sm ${(theme === 'light') ? 'shadow-[0px_4px_4px_rgba(0,0,0,0.1)]' : 'shadow-[0px_4px_4px_rgba(255,255,255,0.1)]'}`}>
      <LeftNav/>
      <RightNav/>
    </div>
  )
}

export default Navbar
