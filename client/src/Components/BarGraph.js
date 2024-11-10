import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts"

const BarGraph = () => {
  return (
    <div>
      <ResponsiveContainer width="50%" aspect={3}>
        <BarChart>
            <XAxis/>
            <YAxis/>
            <Tooltip/>
            <Bar/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarGraph
