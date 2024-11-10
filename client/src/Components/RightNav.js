import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from './ThemeContext'

const RightNav = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='justify-center sm:justify-between flex flex-col sm:flex-row items-center gap-2'>
        <div className='flex p-2 rounded-2xl bg-white items-center cursor-pointer focus:none'>
            <input type='text' placeholder='Search'/>
            <FaSearch/>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <div className={`rounded-full hover:bg-white hover:text-black p-2 cursor-pointer ${theme === 'light' ? 'bg-[rgb(236,238,241)]' : 'bg-black text-white'}`}>
            <GoBell/>
          </div>
          <div className={`rounded-full hover:bg-white hover:text-black p-2 cursor-pointer ${theme === 'light' ? 'bg-[rgb(236,238,241)]' : 'bg-black text-white'}`} onClick={toggleTheme}>
            {(theme === 'dark') ? <MdOutlineWbSunny/> : <IoMoonOutline/>}
          </div>
          <div className={`rounded-full hover:bg-white hover:text-black p-2 cursor-pointer ${theme === 'light' ? 'bg-[rgb(236,238,241)]' : 'bg-black text-white'}`}>
            <FaUserCircle/>
          </div>
        </div>
    </div>
  )
}

export default RightNav