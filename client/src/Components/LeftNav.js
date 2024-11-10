import React from 'react'
import { useTheme } from './ThemeContext'

const LeftNav = () => {
  const { theme } = useTheme();
  return (
    <div className={`font-bold text-2xl font-mono ${(theme === 'light') ? 'text-black' : 'text-white'}`}>
      <h1>Dashboard</h1>
    </div>
  )
}

export default LeftNav
