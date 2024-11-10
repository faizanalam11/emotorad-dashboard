import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { barData } from './Constants';
import { useTheme } from './ThemeContext';

const BarGraph = () => {
  const { theme } = useTheme();

  return (
    <div className={`w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 m-auto rounded-3xl flex justify-center items-center p-4 ${theme === 'light' ? 'bg-[#91a2b7]' : 'bg-[#969ea9]'}`}>
      <ResponsiveContainer 
        width="100%" 
        height={window.innerWidth < 640 ? 200 : 300}  // Adjust height for smaller screens
      >
        <BarChart data={barData}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="guestAmount" fill='#629584' name="Guest Amount" />
          <Bar dataKey="userAmount" fill='#387478' name="User Amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarGraph;
