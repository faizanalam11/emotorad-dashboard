import React from 'react'
import { sidebarLists } from './Constants'
import SidebarItem from './SidebarItem'
import { useNavigate } from 'react-router-dom';
import { IoMailOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Sidebar = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className='col-span-1 lg:col-span-2 py-1 pl-1 sm:p-2'>
      <div className='bg-[#133E87] h-full rounded-md shadow-xl sm:p-2 text-white flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-around items-center lg:items-start h-5/6'>
          <h1 className='capitalize text-2xl lg:text-3xl font-bold w-full text-center lg:text-left' style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>Board.</h1>
          <div className='flex flex-col gap-2 items-start'>
            {sidebarLists.map((item, index) => (
              <SidebarItem
                key={index}
                name={item.name}
                icon={item.icon}
                onClick={item.onClick}
              />
            ))}
          </div>
          <div className='w-full'>
            <div className='font-thin text-2xl lg:text-sm flex flex-col items-center lg:items-start justify-start gap-1'>
              <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                <span className='hidden lg:flex'>Help</span>
                <IoIosHelpCircleOutline/>
              </div>
              <div className='flex items-center gap-1 cursor-pointer hover:underline'>
                <IoMailOutline/>
                <span className='hidden lg:flex'>Contact US</span>
              </div>
              <div>
                <h1 className='hover:bg-red-400 hover:text-blue-950 flex gap-1 sm:p-1 bg-red-500 rounded-md justify-center items-center cursor-pointer' onClick={handleLogOut}>
                  <CiLogout/>
                  <span className='hidden lg:flex'>Logout</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
