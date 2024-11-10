import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts"
import { barData } from './Constants'
import { useTheme } from './ThemeContext'

const BarGraph = () => {
  const { theme } = useTheme();
  return (
    <div className={`rounded-3xl flex w-4/6 justify-start items-center ${theme === 'light' ?  'bg-[#91a2b7]' : 'bg-[#969ea9]'}`}>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={barData}>
            <XAxis dataKey="week"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="guestAmount" fill='#629584' name="Guest Amount"/>
            <Bar dataKey="userAmount" fill='#387478' name="User Amount"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarGraph
