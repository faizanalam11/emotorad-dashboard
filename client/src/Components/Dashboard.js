import React from 'react';
import BarGraph from './BarGraph';
import PieCharts from './PieCharts';

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <BarGraph/>
      <PieCharts/>
    </div>
  );
};

export default Dashboard;
