import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts"
import { barData } from './Constants'

const BarGraph = () => {
  return (
    <div className='flex p-2 m-auto justify-start items-center'>
      <ResponsiveContainer width="50%" aspect={3}>
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
