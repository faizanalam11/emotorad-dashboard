import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import { data01, data02 } from './Constants';
import { useTheme } from './ThemeContext';

const PieCharts = () => {
  const theme = useTheme();

  return (
    <div className={`w-full sm:w-3/6 rounded-3xl h-full flex m-auto justify-center items-center ${theme === 'light' ? 'bg-[#91a2b7]' : 'bg-[#969ea9]'}`}>
      <ResponsiveContainer width="100%" height={200} minWidth={150}>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={window.innerWidth < 640 ? 30 : 50}  // Adjust radius for small screens
            fill="#387478"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={window.innerWidth < 640 ? 40 : 60}  // Adjust radius for small screens
            outerRadius={window.innerWidth < 640 ? 50 : 80}
            fill="#629584"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
