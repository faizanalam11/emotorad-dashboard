import React from 'react'
import { ResponsiveContainer, PieChart, Pie} from "recharts"
import { data01, data02 } from './Constants'

const PieCharts = () => {
  return (
    <div className='flex p-2 m-auto justify-start items-center'>
      <ResponsiveContainer width="50%" aspect={3}>
      <PieChart width={730} height={250}>
        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieCharts
