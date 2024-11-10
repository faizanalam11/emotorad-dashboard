import React from 'react';

const SidebarItem = ({ name, icon, onClick }) => {
  return (
    <div className="flex flex-row items-center gap-2 p-1 hover:bg-[#88a1b7] rounded-md w-full cursor-pointer hover:z-20 hover:shadow-md sm:text-2xl lg:text-base" onClick={onClick}>
      {icon} {/* This will render the icon */}
      <span className="hidden lg:flex">{name}</span>
    </div>
  );
};

export default SidebarItem;
