import React from 'react'
import { ResponsiveContainer, PieChart, Pie} from "recharts"
import { data01, data02 } from './Constants'
import { useTheme } from './ThemeContext'

const PieCharts = () => {
  const theme = useTheme();
  return (
    <div className={`w-3/6 rounded-3xl h-full flex m-auto justify-start items-center ${theme === 'light' ?  'bg-[#91a2b7]' : 'bg-[#969ea9]'}`}>
      <ResponsiveContainer width="100%" aspect={2}>
      <PieChart >
        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#387478" />
        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#629584" label />
</PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieCharts
